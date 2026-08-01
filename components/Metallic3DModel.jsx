'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Metallic3DModel({ 
  modelType = 'cyberOrb', 
  size = 460, 
  position = 'center',
  className = '' 
}) {
  const mountRef = useRef(null);
  const [activeModel, setActiveModel] = useState(modelType);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Clear previous canvas
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild);
    }

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    // 3. Renderer with high-end anti-aliasing & DPR scaling
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true, 
      powerPreference: 'high-performance',
      logarithmicDepthBuffer: true,
    });

    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    renderer.setPixelRatio(dpr);
    renderer.setSize(size, size);
    renderer.domElement.style.width = `${size}px`;
    renderer.domElement.style.height = `${size}px`;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    mount.appendChild(renderer.domElement);

    // 4. Procedural Studio HDRI Environment Map (Soft Studio Lighting)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 1024;
    envCanvas.height = 512;
    const ctx = envCanvas.getContext('2d');

    // Deep gradient studio background
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 512);
    bgGrad.addColorStop(0, '#090c15');
    bgGrad.addColorStop(0.5, '#05070c');
    bgGrad.addColorStop(1, '#0e1322');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Top Studio Key Light (Soft Cyan to Pure White Gradient)
    const keyGrad = ctx.createLinearGradient(100, 0, 924, 0);
    keyGrad.addColorStop(0, '#ffffff');
    keyGrad.addColorStop(0.3, '#00f2fe'); 
    keyGrad.addColorStop(0.6, '#06b6d4'); // Focal Cyan Accent
    keyGrad.addColorStop(1, '#ffffff');
    ctx.fillStyle = keyGrad;
    ctx.fillRect(60, 20, 904, 150);

    // Bottom Rim Soft Studio Fill Light
    const rimGrad = ctx.createRadialGradient(512, 380, 20, 512, 380, 300);
    rimGrad.addColorStop(0, '#ffffff');
    rimGrad.addColorStop(0.6, '#3b82f6'); // Azure Rim
    rimGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = rimGrad;
    ctx.fillRect(0, 240, 1024, 272);

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    scene.environment = envMap;

    // Group to hold all 3D components for synchronized movement
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 5. Geometries & Materials based on selected style
    let mainMesh;
    let innerCore;
    let outerRing1;
    let outerRing2;
    let particleSystem;

    // Liquid Glass / Titanium Chrome Hybrid Material
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x111625),
      metalness: 0.85,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 0.95,
      ior: 2.2,
      specularIntensity: 2.0,
      specularColor: new THREE.Color(0xffffff),
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0f1422),
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.6,
      opacity: 1,
      transparent: true,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
    });

    const glowingCoreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00f2fe),
      emissive: new THREE.Color(0x06b6d4),
      emissiveIntensity: 2.5,
      roughness: 0.2,
    });

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00f2fe),
      metalness: 0.9,
      roughness: 0.1,
      emissive: new THREE.Color(0x06b6d4),
      emissiveIntensity: 0.4,
    });

    if (activeModel === 'cyberOrb' || activeModel === 'sphere') {
      // 1. Core Glass Sphere
      const sphereGeo = new THREE.SphereGeometry(1.0, 64, 64);
      mainMesh = new THREE.Mesh(sphereGeo, glassMaterial);
      mainGroup.add(mainMesh);

      // 2. Inner Glowing Core
      const coreGeo = new THREE.IcosahedronGeometry(0.48, 2);
      innerCore = new THREE.Mesh(coreGeo, glowingCoreMaterial);
      mainGroup.add(innerCore);

      // 3. Dual Orbital Rings
      const ring1Geo = new THREE.TorusGeometry(1.4, 0.015, 24, 128);
      outerRing1 = new THREE.Mesh(ring1Geo, ringMaterial);
      outerRing1.rotation.x = Math.PI / 3;
      mainGroup.add(outerRing1);

      const ring2Geo = new THREE.TorusGeometry(1.6, 0.012, 24, 128);
      outerRing2 = new THREE.Mesh(ring2Geo, ringMaterial);
      outerRing2.rotation.y = Math.PI / 4;
      outerRing2.rotation.x = -Math.PI / 6;
      mainGroup.add(outerRing2);

    } else if (activeModel === 'crystalPrism' || activeModel === 'icosahedron') {
      // Faceted Futuristic Crystal Prism
      const crystalGeo = new THREE.IcosahedronGeometry(1.15, 0);
      mainMesh = new THREE.Mesh(crystalGeo, chromeMaterial);
      mainGroup.add(mainMesh);

      // Inner Core
      const coreGeo = new THREE.OctahedronGeometry(0.5, 0);
      innerCore = new THREE.Mesh(coreGeo, glowingCoreMaterial);
      mainGroup.add(innerCore);

      // Single Elegant Ring
      const ring1Geo = new THREE.TorusGeometry(1.55, 0.016, 24, 128);
      outerRing1 = new THREE.Mesh(ring1Geo, ringMaterial);
      outerRing1.rotation.x = Math.PI / 2.5;
      mainGroup.add(outerRing1);

    } else {
      // Smooth Torus Knot (Sculptural)
      const knotGeo = new THREE.TorusKnotGeometry(0.85, 0.28, 240, 32, 2, 3);
      mainMesh = new THREE.Mesh(knotGeo, chromeMaterial);
      mainGroup.add(mainMesh);
    }

    // 6. Ambient Floating Dust Particle Field
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 7. Studio Key & Rim Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.0);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 2.5);
    fillLight.position.set(-6, -4, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x3b82f6, 2.0);
    rimLight.position.set(3, -6, -4);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x0a0e1a, 0.7);
    scene.add(ambientLight);

    // 8. GSAP Smooth Levitation Animation
    const floatAnim = gsap.to(mainGroup.position, {
      y: 0.12,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // 9. Interactive Mouse Parallax Lerp
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 0.8;
      targetY = (e.clientY / innerHeight - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 10. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Synchronized rotations
      if (mainMesh) {
        mainMesh.rotation.y = elapsedTime * 0.25;
        mainMesh.rotation.x = elapsedTime * 0.12;
      }

      if (innerCore) {
        innerCore.rotation.y = elapsedTime * -0.6;
        innerCore.rotation.z = elapsedTime * 0.4;
      }

      if (outerRing1) {
        outerRing1.rotation.z = elapsedTime * 0.3;
      }

      if (outerRing2) {
        outerRing2.rotation.z = elapsedTime * -0.25;
        outerRing2.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;
      }

      if (particleSystem) {
        particleSystem.rotation.y = elapsedTime * 0.05;
      }

      // Smooth mouse lerp
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      mainGroup.rotation.y = currentX * 0.6;
      mainGroup.rotation.x = currentY * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      floatAnim.kill();
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      chromeMaterial.dispose();
      glassMaterial.dispose();
      glowingCoreMaterial.dispose();
      ringMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      envTexture.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
    };
  }, [activeModel, size]);

  const posClasses = {
    right: 'relative lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 z-20 pointer-events-none flex justify-center items-center',
    left: 'relative lg:absolute lg:left-4 lg:top-1/2 lg:-translate-y-1/2 z-20 pointer-events-none flex justify-center items-center',
    center: 'relative mx-auto z-20 pointer-events-none flex justify-center items-center',
  };

  return (
    <div className={`${posClasses[position] || posClasses.center} ${className}`}>
      {/* Background Soft Radial Glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div 
        ref={mountRef} 
        style={{ width: `${size}px`, height: `${size}px` }}
        className="flex items-center justify-center overflow-visible filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]" 
      />
    </div>
  );
}
