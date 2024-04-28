"use client"

import "@/styles/styles.scss"
import React, { useRef, useState, useEffect } from 'react';
import { TweenLite, TweenMax, Power4 } from 'gsap';
import SimplexNoise from 'simplex-noise';
import { Card } from '@/registry/default/ui/card';

const AudioVisualizer: React.FC = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    const handleStart = () => {
        if (!isInitialized) {
            initializeAudioVisualizer();
            setIsInitialized(true); // Set to true to prevent re-initialization
        }
    };

    // const audioRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    console.log("1-audioRef: ", audioRef)
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

    
    // useEffect(() => {
    const initializeAudioVisualizer = () => {
    const context = new window.AudioContext();
    const audio = audioRef.current as HTMLMediaElement;
    let source:any

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

    start.addEventListener("click", () => {
        setupAudioContext();

        audio.play().then(() => {
            timeOverlay.classList.replace("pause", "play");
            update();
        });
    });
    

}

    // }, []);

  return (
    <>
     <Card ref={homepageRef} id="homepage">
        <h2>
        {/* <button ref={startRef} id="start" onClick={handleStart}>Start</button> */}
        <button ref={startRef} id="start" onClick={handleStart}>Start</button>
            <audio id="audio" ref={audioRef} hidden controls crossOrigin="anonymous" src="https://clementroche.dev/nto-alter-ego.mp3"></audio>
        </h2>
        </Card>
        <div id="content">
            <div ref={timeOverlayRef} id="overlay" className="time">
                <div className="time pause">
                    <button ref={pauseButtonRef} className="btn pause">Pause
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" className="shape"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </button>
                    <button ref={playButtonRef} className="btn play">Play
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"  className="shape"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </button>
                </div>
                <div className="color">
                    <div ref={colorOverlayRef} id="colorOverlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" className="shape"/></svg>
                    </div>
                </div>
            </div>
            {/* <!--   <input type="file" id="thefile" accept="audio/*" /> -->
            <!-- <button id="go">go</button> --> */}
            <canvas ref={canvasRef} id="canvas"></canvas>
            <div id="range">
                <input ref={alphaRangeRef} type="range" id="range" />
            </div>
        </div>
        </>
  );
};

export default AudioVisualizer;
