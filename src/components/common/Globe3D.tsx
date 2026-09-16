import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, ZoomIn, ZoomOut, Compass, Sun, Moon } from 'lucide-react';

interface Globe3DProps {
  className?: string;
}

export const Globe3D: React.FC<Globe3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isNight, setIsNight] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(true);
  autoRotateRef.current = autoRotate;

  const globeMeshRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 480;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x05070D, 1);
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    backLight.position.set(-5, -2, -4);
    scene.add(backLight);

    // 5. Starfield Background
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 900;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 80;
      starPositions[i + 1] = (Math.random() - 0.5) * 80;
      starPositions[i + 2] = -10 - Math.random() * 40;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.75,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 6. Earth Sphere Geometry
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    // Load local texture
    const texturePath = isNight ? '/textures/earth-night.jpg' : '/textures/earth-blue-marble.jpg';
    const earthTexture = textureLoader.load(
      texturePath,
      () => {
        renderer.render(scene, camera);
      },
      undefined,
      () => {
        // Fallback procedural canvas texture if load fails
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#081726';
          ctx.fillRect(0, 0, 1024, 512);
          ctx.fillStyle = '#1c3d2e';
          ctx.beginPath();
          ctx.arc(300, 200, 100, 0, Math.PI * 2);
          ctx.arc(650, 250, 120, 0, Math.PI * 2);
          ctx.fill();
        }
        const fallbackTex = new THREE.CanvasTexture(canvas);
        if (globeMeshRef.current) {
          (globeMeshRef.current.material as THREE.MeshStandardMaterial).map = fallbackTex;
          (globeMeshRef.current.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
      }
    );

    const globeMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.1,
    });

    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    // Initial angle showing Middle East, India, Asia & Europe
    globeMesh.rotation.y = 1.8;
    globeMesh.rotation.x = 0.25;
    scene.add(globeMesh);
    globeMeshRef.current = globeMesh;

    // 7. Atmospheric Glow Layer
    const atmosphereGeometry = new THREE.SphereGeometry(1.025, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // 8. Outer subtle halo ring
    const haloGeometry = new THREE.RingGeometry(1.08, 1.14, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xdf9a28,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI / 2.3;
    scene.add(halo);

    // 9. Interactive Drag & Momentum
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      velocityX = 0;
      velocityY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      velocityX = deltaX * 0.005;
      velocityY = deltaY * 0.005;

      globeMesh.rotation.y += velocityX;
      globeMesh.rotation.x = Math.max(-1.1, Math.min(1.1, globeMesh.rotation.x + velocityY));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY * 0.0015;
      camera.position.z = Math.max(1.6, Math.min(4.8, camera.position.z + zoomFactor));
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    dom.addEventListener('wheel', onWheel, { passive: false });

    // 10. Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        if (autoRotateRef.current) {
          globeMesh.rotation.y += 0.0018;
        }
        // Apply inertia
        velocityX *= 0.94;
        velocityY *= 0.94;
        globeMesh.rotation.y += velocityX;
        globeMesh.rotation.x = Math.max(-1.1, Math.min(1.1, globeMesh.rotation.x + velocityY));
      }

      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // 11. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      dom.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      globeGeometry.dispose();
      globeMaterial.dispose();
      earthTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
    };
  }, [isNight]);

  // Zoom helpers
  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const delta = direction === 'in' ? -0.35 : 0.35;
    cameraRef.current.position.z = Math.max(1.6, Math.min(4.8, cameraRef.current.position.z + delta));
  };

  const handleReset = () => {
    if (!globeMeshRef.current || !cameraRef.current) return;
    globeMeshRef.current.rotation.y = 1.8;
    globeMeshRef.current.rotation.x = 0.25;
    cameraRef.current.position.z = 2.8;
  };

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden bg-[#05070D] border border-white/10 shadow-2xl ${className}`} style={{ height: '500px' }}>
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing select-none" />

      {/* Top Header Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
          <span className="font-bold text-[#38BDF8]">3D SATELLITE EARTH</span>
          <span className="text-white/40">|</span>
          <span className="text-white/70">Global Trade Network</span>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] text-white/50 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
        <Compass className="w-3.5 h-3.5 text-[#DF9A28]" />
        <span>Drag to rotate • Scroll to zoom</span>
      </div>

      {/* Control Buttons (Right Side) */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2.5 rounded-xl border backdrop-blur-md transition-all text-xs font-semibold cursor-pointer ${
            autoRotate
              ? 'bg-[#DF9A28]/20 border-[#DF9A28]/50 text-[#DF9A28]'
              : 'bg-black/60 border-white/15 text-white/70 hover:text-white'
          }`}
          title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
        >
          <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
        </button>

        <button
          type="button"
          onClick={() => setIsNight(!isNight)}
          className="p-2.5 rounded-xl bg-black/60 border border-white/15 hover:border-white/30 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          title={isNight ? 'Switch to Daytime Satellite' : 'Switch to Night Lights'}
        >
          {isNight ? <Sun className="w-4 h-4 text-[#DF9A28]" /> : <Moon className="w-4 h-4 text-[#38BDF8]" />}
        </button>

        <button
          type="button"
          onClick={() => handleZoom('in')}
          className="p-2.5 rounded-xl bg-black/60 border border-white/15 hover:border-white/30 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => handleZoom('out')}
          className="p-2.5 rounded-xl bg-black/60 border border-white/15 hover:border-white/30 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="p-2.5 rounded-xl bg-black/60 border border-white/15 hover:border-white/30 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          title="Reset Camera"
        >
          <Compass className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
