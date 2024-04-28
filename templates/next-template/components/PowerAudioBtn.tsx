"use client"

import "@/styles/styles.scss"
import React, { useRef, useState, useEffect } from 'react';
import { TweenLite, TweenMax, Power4 } from 'gsap';
import SimplexNoise from 'simplex-noise';
import { Card } from '@/registry/default/ui/card';

const AudioVisualizer: React.FC = () => {
    // const audioRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const startRef = useRef<HTMLButtonElement>(null);
    const homepageRef = useRef<HTMLDivElement>(null);
    const timeOverlayRef = useRef<HTMLDivElement>(null);
    const colorOverlayRef = useRef<HTMLDivElement>(null);
    const playButtonRef = useRef<HTMLButtonElement>(null);
    const pauseButtonRef = useRef<HTMLButtonElement>(null);
    const alphaRangeRef = useRef<HTMLInputElement>(null);

    let safari = false;
    let firstPlay = true;
    let isPause = false;

    const audioRef: any = useRef<HTMLAudioElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
    let canvas = canvasRef.current as HTMLCanvasElement;

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

    useEffect(() => {
        // 초기화하며 AudioContext 생성
        audioCtxRef.current = new AudioContext();
        initializeCanvas();
        return () => {
            // 컴포넌트가 언마운트 될 때 AudioContext를 닫습니다.
            audioCtxRef.current?.close();
        };
    }, []);

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
    }

    const initializeAudioVisualizer = () => {
        console.log("initializeAudioVisualizer called")
        const context = new window.AudioContext();
        const audio = audioRef.current as HTMLMediaElement;
        let source:any
        console.log("audio: ", audio)
        // const source = context.createMediaElementSource(audio);
        const canvas = canvasRef.current as HTMLCanvasElement;
        const start = document.querySelector("#start");
        const homepage = document.querySelector("#homepage") as HTMLElement;
        const timeOverlay = document.querySelector("#overlay .time");
        const colorOverlay = document.querySelector("#overlay .color");
        const playButton = document.querySelector("#overlay .time .btn.play");
        const pauseButton = document.querySelector("#overlay .time .btn.pause");
        const alphaRange = document.querySelector("#range input") as HTMLInputElement;
        // const alphaRange = 2000
    
    
        console.log("context: ", context)
    
        if(canvas === null || audio === null || start === null || homepage === null || timeOverlay === null || colorOverlay === null || playButton === null || pauseButton === null || alphaRange === null) return;
    
        if (navigator.vendor.toLowerCase().includes("apple")) {
            audio.hidden = false;
            document.body.classList.add("safari");
            start.textContent = "";
            safari = true;
        }
        
        canvas.width = window.innerHeight;
        canvas.height = window.innerWidth;
    
        let width = window.innerHeight;
        let height = window.innerWidth;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    
        let simplex = new SimplexNoise();
    
        let order = [0, 1, 2];
        let radius: any;
        let dPI = Math.PI * 2;
    
        let analyser: any;
        let bufferLength: any;
        let dataArray: any;
        
        let fftSize = 2048;
        let nbParticles = 600;
        let circles:any = [];
        
        class Circle {
            index: number;
            xR: number;
            yR: number;
            i: number;
            value: number;
            cachedValue: number | null;
            x: number;
            y: number;
            radius: number;
            xC: number;  // Declare xC
            yC: number;  // Declare yC
            p: number;   // Declare p
            rgbArray: [number, number, number]; // Declare rgbArray
            rgb: string; // Declare rgb
    
            constructor(index: number) {
                this.index = index;
                this.xR = Math.random();
                this.yR = Math.random();
                this.i = 0;
                this.value = 0;
                this.cachedValue = null;
                this.x = 0;
                this.y = 0;
                this.radius = 0;
                this.xC = 0;  // Initialize xC
                this.yC = 0;  // Initialize yC
                this.p = 0;   // Initialize p
                this.rgbArray = [0, 0, 0]; // Initialize rgbArray
                this.rgb = ""; // Initialize rgb
            }
    
            update() {
                if (3 === this.index) {
                    TweenMax.to(this, 2, {
                        ease: Power4.easeOut,
                        value: dataArray[this.index]
                    });
                } else {
                    this.cachedValue = this.value;
                    this.value = dataArray[this.index];
                }
        
                if (this.value !== this.cachedValue) {
                    this.xC = radius * (2 * this.xR) * Math.cos(this.index + this.i) + width / 2;
                    this.yC =
                        radius * (2 * this.yR) * Math.sin(this.index + this.i) + height / 2;
        
                    this.p = (210 - this.value) * 0.5;
        
                    this.y = simplex.noise2D(this.xR, this.i) * this.p + this.yC;
                    this.x = simplex.noise2D(this.yR, this.i) * this.p + this.xC;
        
                    this.i += 0.01;
                }
            }
        
            draw() {
                if (this.value !== this.cachedValue) {
                    this.rgbArray = [
                        this.value + 25 * (this.index / bufferLength),
                        500 * (this.index / bufferLength),
                        50
                    ];
                    this.rgb = `rgb(${Math.round(this.rgbArray[order[0]])},${Math.round(
                        this.rgbArray[order[1]]
                    )},${Math.round(this.rgbArray[order[2]])})`;
                }
        
                drawCircle(
                    Math.round(this.x),
                    Math.round(this.y),
                    this.value * 0.1,
                    this.rgb
                );
        }
    }
    
        // let circles = [];
    
        // function createCircles() {
        const createCircles = () => {
            for (let i = 0; i < nbParticles; i++) {
                circles.push(new Circle(i));
            }
        }
        
        createCircles();
    
        const showCircles = () => {
            for (let i = 0; i < circles.length; ++i) {
                circles[i].update();
                circles[i].draw();
            }
        }
        
        pauseButton.addEventListener("click", () => {
            audio.pause();
            isPause = true;
            timeOverlay.classList.remove("play");
            timeOverlay.classList.add("pause");
        });
    
        // let firstPlay = true;
    
        playButton.addEventListener("click", () => {
            audio.play();
            isPause = false;
            update();
            timeOverlay.classList.remove("pause");
            timeOverlay.classList.add("play");
        });
    
        const background = (color: any) => {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, width, height);
        }
    
        // function update() {
        const update = () => {
            if (!audio.paused) {
                analyser.getByteFrequencyData(dataArray);
                background(`rgba(0,0,0,${Number(alphaRange.value) / 1})`);
                // background(`rgba(0,0,0,0`);
                radius = circles[3].value;
                showCircles();
                requestAnimationFrame(update);
            }
        }
    
    
        // function setupAudioContext() {
        const setupAudioContext = () => {
            console.log("source1: ", source)
            if (!source) {
                console.log("source2: ", source)
                source = context.createMediaElementSource(audio);
                analyser = context.createAnalyser();
                source.connect(analyser);
                analyser.connect(context.destination);
            }
            analyser.fftSize = fftSize;
            analyser.smoothingTimeConstant = 0.5;
            analyser.maxDecibels = -10;
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
            isPause = false;
            update();
            // }, 2000);
            timeOverlay.classList.remove("pause");
            timeOverlay.classList.add("play");
        }
    
        // function drawCircle(x: any, y: any, size: any, fill: any) {
        const drawCircle = (x: any, y: any, size: any, fill: any) => {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = fill;
            ctx.translate(x, y);
            ctx.arc(0, 0, size, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }
        
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = canvas.width;
            height = canvas.height;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, width, height);
        });
    
    
        audio.addEventListener("click", () => {
            if (safari) {
                TweenLite.to(homepage, 0.25, {
                    ease: Power4.easeIn,
                    opacity: 100,
                    onComplete() {
                        homepage.style.display = "none";
                    }
                });
    
                firstPlay = false;
                audio.volume = 0.5;
        
                analyser = context.createAnalyser();
                source.connect(analyser);
                analyser.connect(context.destination);
                analyser.fftSize = fftSize;
                analyser.smoothingTimeConstant = 0.5;
                analyser.maxDecibels = -10;
                bufferLength = analyser.frequencyBinCount;
                dataArray = new Uint8Array(bufferLength);
                isPause = false;
                update();
                // }, 2000);
                timeOverlay.classList.remove("pause");
                timeOverlay.classList.add("play");
            }
        });
    
        // start.addEventListener("click", () => {
        //     setupAudioContext();
        //     console.log("audio: ", audio)
        //     audio.play().then(() => {
        //         console.log("audio played")
        //         timeOverlay.classList.replace("pause", "play");
        //         update();
        //     });
        // });
        setupAudioContext();
        audio.play()
        console.log("audio: ", audio)
        audio.play().then(() => {
            console.log("audio played")
            timeOverlay.classList.replace("pause", "play");
            update();
        });
    
    }
    return (
        <div className="z-0">
            <button id="start" onClick={initializeAudioVisualizer} className="relative">
                <canvas
                    ref={canvasRef}
                    id="canvas"
                    className="bg-transparent border-primary border-2"
                ></canvas>
                <audio ref={audioRef} hidden crossOrigin="anonymous" src="https://clementroche.dev/nto-alter-ego.mp3"></audio>
            </button>
        </div>
    );
};

export default AudioVisualizer;

