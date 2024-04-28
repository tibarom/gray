"use client"

import "@/styles/btn.css"
import { set } from "date-fns";
import { is } from "date-fns/locale";
import { init } from "next/dist/compiled/webpack/webpack";

import React, { useEffect, useRef, useState } from 'react';
import { any } from "zod";

const AudioVisualizer: React.FC = () => {
    useEffect(() => {
        const checkMobile = () => /Android|iPhone/i.test(navigator.userAgent);
        setIsMobile(checkMobile());
    }, []);

    const [isInitialized, setIsInitialized] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // 추가: 음악 재생 상태 관리
    const [frequency, setFrequency] = useState(30);
    const [isMobile, setIsMobile] = useState(false);

    const homeRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const audioRef: any = useRef<HTMLAudioElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
    let canvas = canvasRef.current as HTMLCanvasElement;

    useEffect(() => {
        // 초기화하며 AudioContext 생성
        audioCtxRef.current = new AudioContext();
        initializeCanvas();
        return () => {
            // 컴포넌트가 언마운트 될 때 AudioContext를 닫습니다.
            audioCtxRef.current?.close();
        };
    }, []);

    const drawMercatorGrid = (canvas: any) => {
        const ctx = canvas.getContext('2d');
        const width = canvas.width*10;
        const height = canvas.width*5;
    
        // 그리드 그리기 설정
        const gridSize = 30; // 격자 크기 설정
        ctx.strokeStyle = '#808080'; // 선 색상: 회색
        ctx.lineWidth = 2; // 선 두께
        ctx.globalAlpha = 0.2;
    
        // 수직 선 그리기
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
    
        // 수평 선 그리기
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        ctx.globalAlpha = 1;
    }    

    const togglePlayPause = () => {
        if (audioCtxRef.current) {
            const audioCtx = audioCtxRef.current;
            if (audioCtx.state === 'running') {
                audioCtx.suspend().then(() => console.log("Audio paused"));
            } else if (audioCtx.state === 'suspended') {
                audioCtx.resume().then(() => console.log("Audio resumed"));
            }
        }
    };

    const initializeCanvas = () => {
        while (canvasRef.current === null) {
            console.log("canvasRef is null")
            break;
        }
        console.log("canvasRef is not null")
        console.log("canvasRef.current: ", canvasRef.current)
        canvas = canvasRef.current as HTMLCanvasElement;
        canvas.style.width = '6vw';
        canvas.style.height = '6vw';
        
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        console.log("start drawing grid")
        drawMercatorGrid(canvas);
    }

    const initializeAudioVisualizer = () => {
        if(!isInitialized) {
        let moyenne: number;
        // const canvas = canvasRef.current as HTMLCanvasElement;
        // if(canvas === null) return; 
        // canvas.style.width = '10vw';
        // canvas.style.height = '10vh';
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;

        // drawMercatorGrid(canvas);

        const slider = document.querySelector("#range") as HTMLInputElement;
        let sliderFreq: number = 10;
        let cumul: number = 0;

        let lines: Draw;

        class Draw {
            position: number[];
            ctx: CanvasRenderingContext2D;
            freq: number;
            colors: string[];
            moyenne: number;

            constructor(opts?: { ctx: CanvasRenderingContext2D }) {
                this.position = []
                this.ctx = opts ? opts.ctx : new CanvasRenderingContext2D
                this.freq = 0.00015
                this.colors = ['white', '#99C5B5', '#AFECE7', '#81F499']
                this.moyenne = 0
            }

            update() {
            }
        
            draw(ctx: CanvasRenderingContext2D) {
            ctx.save()
            ctx.beginPath()
            for (let i = 1; i < 6; i++) {
                ctx.beginPath()
                for (let x = 0; x < canvas.width; x++) {
                if (moyenne < 10) {
                    moyenne = 1
                }
                let y = Math.sin(x * moyenne * (sliderFreq * 0.0000025) * (i / 3) + (cumul * 0.0005)) * (moyenne * 2.5)
                ctx.lineTo(x, y + canvas.height / 2)
                }
                ctx.globalAlpha = i / 10 
                ctx.strokeStyle = this.colors[i%2]
                ctx.lineWidth = 3
                ctx.stroke()
            }
            ctx.restore()
        
            }
        } 

        const initLines:any = () => {
            lines = new Draw({ctx});
        }
  
        const home = document.querySelector("#home") as HTMLElement;
        if(home !== null) { home.style.display = 'none'}
        const app = document.querySelector("#app") as HTMLElement;
        if(app !== null) { app.style.display = 'contents'}

        const start = document.querySelector("#start") as HTMLElement;

        let audioCtx: AudioContext
        let audioBuffer: any
        let audioSource: any
        let analyser: AnalyserNode
        let frequencyData: Uint8Array
        let biquadFilter: BiquadFilterNode

        let DELTA_TIME: number
        let LAST_TIME:number
        let t: number

        let ctx: CanvasRenderingContext2D
        const reducer: any = (acc: any, reducer: any) => acc + reducer

        let average: number

        const frame:any = () => {
            if (!lines) {
                initLines();
            }
            DELTA_TIME = Date.now() - LAST_TIME
            LAST_TIME = Date.now()
            t += 0.01
            analyser.getByteFrequencyData(frequencyData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            biquadFilter.type = "lowshelf"
            biquadFilter.frequency.setValueAtTime(sliderFreq, audioCtx.currentTime)
            biquadFilter.gain.value = 25
        
            moyenne = frequencyData.reduce(reducer) / frequencyData.length
        
            for (var i = 0; i < 6; i++) {
                // get the frequency according to current i
                let percentIdx = i / 6;
                let frequencyIdx = Math.floor(1024 * percentIdx)
            
                lines.update()
                lines.draw(ctx)
            
                cumul += frequencyData[frequencyIdx]
            }
            average = cumul / 255;
            requestAnimationFrame(frame)
        }

        const loadSound = (url: string) => {
            console.log('loadSound called')
            var request = new XMLHttpRequest();
            request.open('GET', url, true)
            request.responseType = 'arraybuffer'
        
            request.onload = function () {
            audioCtx.decodeAudioData(request.response, function (buffer) {
                // success callback
                audioBuffer = buffer
                // Create sound from buffer
                audioSource = audioCtx.createBufferSource()
                audioSource.buffer = audioBuffer
                // connect the audio source to context's output
                audioSource.connect(analyser)
                //analyser.fftSize = 256
                analyser.connect(audioCtx.destination)
                frequencyData = new Uint8Array(analyser.frequencyBinCount)
                // Filters
                audioSource.connect(biquadFilter)
                biquadFilter.connect(audioCtx.destination)
                // play sound
                audioSource.start()
                frame()
            }, function () {
                // error callback
                //
            })
            }
            request.send()
        }

        // start.addEventListener("click", () => {
        //     console.log('start clicked')
        //     initLines()
        //     console.log('initLine called')
        //     loadSound(audio.src)
        //     console.log('loadSound called')
        //     console.log('start clicked event completed')    
        // });

        // slider.oninput = () => {
        //     setFrequency(parseInt(slider.value));
        // };

        ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        audioCtx = new window.AudioContext()
        analyser = audioCtx.createAnalyser()
        biquadFilter = audioCtx.createBiquadFilter()

        // if (!canvasRef.current || !audioRef.current) return;
        // if (!ctx) return;
        // if (audioCtx.state === 'suspended' && 'ontouchstart' in window) {
        //     const unlock = async () => {
        //         await audioCtx.resume();
        //         document.body.removeEventListener('touchstart', unlock);
        //         document.body.removeEventListener('touchend', unlock);
        //         loadSound('https://clementroche.dev/nto-alter-ego.mp3');
        //     };
        //     document.body.addEventListener('touchstart', unlock, false);
        //     document.body.addEventListener('touchend', unlock, false);
        // }

        loadSound('https://clementroche.dev/nto-alter-ego.mp3');
        setIsInitialized(true)

        togglePlayPause(); // 재생 시작
    } else {
        togglePlayPause(); // 토글 재생/일시정지
    }
    }
    return (
        <div className="z-0">
            <button id="start" onClick={initializeAudioVisualizer} className="relative">
                <canvas
                    ref={canvasRef}
                    id="canvas"
                    className="bg-transparent border-primary border-s-4"
                ></canvas>
                <audio ref={audioRef} hidden crossOrigin="anonymous" src="https://clementroche.dev/nto-alter-ego.mp3"></audio>
            </button>
        </div>
    );
};

export default AudioVisualizer;

