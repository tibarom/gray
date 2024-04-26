"use client"

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

type IcosahedronBufferGeometry = THREE.IcosahedronGeometry;

interface AniComponentProps {
  children: React.ReactNode;
}

const AniComponent: React.FC<AniComponentProps> = ({ children }) => {

  let options = {
    perlin: {
      vel: 0.002,
      speed: 0.00050,
      perlins: 1.0,
      decay: 0.10,
      complex: 0.30,
      waves: 20.0,
      eqcolor: 11.0,
      fragment: true,
      redhell: true
    },
    spin: {
      sinVel: 0.0,
      ampVel: 80.0,
    }
  }
  
  const [startTime, setStartTime] = useState(Date.now());
  
  const [vertexShaderCode, setVertexShaderCode] = useState('');
  const [fragmentShaderCode, setFragmentShaderCode] = useState('');
  const scene = new THREE.Scene();

  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  let material: THREE.ShaderMaterial;
  let mesh: THREE.Points;
  let renderer: THREE.WebGLRenderer;

  useEffect(() => {
    fetch('shaders/shader.vert')
      // .then(response => { console.log("resres: ", response); return response.text() })
      .then(response => response.text())
      .then(setVertexShaderCode);
    console.log("vertexShaderCode", vertexShaderCode)
    fetch('shaders/shader.frag')
      .then(response => response.text())
      .then(setFragmentShaderCode);
    console.log("fragmentShaderCode", fragmentShaderCode)
  }, []);

  useEffect(() => {
    if (vertexShaderCode && fragmentShaderCode && typeof window !== 'undefined') {
      init();
    }
  }, [vertexShaderCode, fragmentShaderCode]);

  const init = () => {
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 12;
    cameraRef.current = camera;

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
    rendererRef.current = renderer;

    window.addEventListener('resize', onWindowResize, false);

    // Create and add shader-based mesh to scene
    material = new THREE.ShaderMaterial({ //
      uniforms: {
        time: { value: 0.0 },
        pointscale: { value: options.perlin.perlins },
        decay: { value: options.perlin.decay },
        complex: { value: options.perlin.complex },
        waves: { value: options.perlin.waves },
        eqcolor: { value: options.perlin.eqcolor },
        fragment: { value: options.perlin.fragment ? 1 : 0 },
        redhell: { value: options.perlin.redhell ? 1 : 0 }
      },
      vertexShader: vertexShaderCode,
      fragmentShader: fragmentShaderCode
    });

    const geo = new THREE.IcosahedronBufferGeometry(3, 7);
    const bufferGeo: THREE.BufferGeometry = geo as THREE.BufferGeometry;
    mesh = new THREE.Points(bufferGeo, material);
    scene.add(mesh);

    animation();
  };

  const onWindowResize = () => {
    if (rendererRef.current && cameraRef.current) {
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  const animation = () => {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;  // Convert to seconds
  
    requestAnimationFrame(animation);
    if (rendererRef.current && cameraRef.current && scene) {
      const performance = currentTime * 0.003;
  
      mesh.rotation.y += options.perlin.vel;
      mesh.rotation.x = Math.sin(performance * options.spin.sinVel) * options.spin.ampVel * Math.PI / 180;
  
      // material.uniforms.time.value += options.perlin.speed * elapsedTime;
      material.uniforms.time.value = options.perlin.speed * (Date.now() - startTime);
      material.uniforms.pointscale.value = options.perlin.perlins;
      material.uniforms.decay.value = options.perlin.decay;
      material.uniforms.complex.value = options.perlin.complex;
      material.uniforms.waves.value = options.perlin.waves;
      material.uniforms.eqcolor.value = options.perlin.eqcolor;
      material.uniforms.fragment.value = options.perlin.fragment ? 1 : 0;
      material.uniforms.redhell.value = options.perlin.redhell ? 1 : 0;
  
      cameraRef.current.lookAt(scene.position);
      rendererRef.current.render(scene, cameraRef.current);
    }
  };

  return (
    // <div className="relative z-0 h-full w-full" >
    <div>
    <div className="sticky top-0 z-0 w-full">
      <div className="z-0" id="container" ref={containerRef} />
    </div>
    <div className="content">
    {children}
</div>
    </div>
  );
};

export default AniComponent;