import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
    camera.position.z = 30;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode.appendChild(renderer.domElement);

    // Color palette
    const accentColors = ["#ef8123", "#ff6900", "#210921", "#903939", "#4f185a", "#591737", "#b38a94", "#bf6037", "#e5dcd6"];
    
    // Particles
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Color - 70% white, 30% accent colors
      let color;
      if (Math.random() < 0.7) {
        // White particles
        color = new THREE.Color("#ffffff");
      } else {
        // Accent color particles
        const randomAccent = accentColors[Math.floor(Math.random() * accentColors.length)];
        color = new THREE.Color(randomAccent);
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      vertexColors: true // Enable per-vertex colors
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight("#ef8123", 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId;
    const animate = () => {
      const time = clock.getElapsedTime();
      
      particles.rotation.x = time * 0.05;
      particles.rotation.y = time * 0.02;

      const particlePositions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i + 1] += Math.sin(time + i) * 0.002;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      pointLight.position.x = Math.sin(time) * 10;
      pointLight.position.z = Math.cos(time) * 10;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}