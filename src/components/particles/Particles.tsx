"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Particles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (mountRef.current) {
        setDimensions({
          width: mountRef.current.offsetWidth,
          height: mountRef.current.offsetHeight,
        });
      }
    };

    // Обновляем размеры при монтировании компонента
    updateDimensions();

    // Обновляем размеры при изменении размеров окна
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Сцена, камера, рендерер ===
    const scene = new THREE.Scene();

    // // Добавляем границы куба для отладки
    // const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
    // const boxMaterial = new THREE.MeshBasicMaterial({
    //   color: 0x000000,
    //   wireframe: true,
    // });
    // const box = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(box);

    // const boxHelper = new THREE.BoxHelper(box, 0xff0000);
    // scene.add(boxHelper);

    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(dimensions.width, dimensions.height);

    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    // === Частицы ===
    const Particles = new THREE.BufferGeometry();
    const ParticlesCount = 1500;
    const positions = new Float32Array(ParticlesCount * 3);

    // Функция для генерации нормального распределения
    const generateGaussian = (mean: number, stdDev: number) => {
      let u = 0,
        v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return (
        mean +
        stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
      );
    };

    // Определяем количество центров плотности
    const densityCentersCount = Math.floor(Math.random() * 5) + 10; // от 10 до 15 центров

    // Генерируем случайные центры плотности
    const densityCenters = [];
    for (let i = 0; i < densityCentersCount; i++) {
      densityCenters.push({
        x: (Math.random() - 0.5) * 7,
        y: (Math.random() - 0.5) * 7,
        z: (Math.random() - 0.5) * 7,
      });
    }

    // Заполняем координаты частиц
    for (let i = 0; i < ParticlesCount; i++) {
      const center =
        densityCenters[Math.floor(Math.random() * densityCenters.length)];
      positions[i * 3] = generateGaussian(center.x, 1); // X
      positions[i * 3 + 1] = generateGaussian(center.y, 1); // Y
      positions[i * 3 + 2] = generateGaussian(center.z, 1); // Z
    }

    Particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Материал для частиц
    const ParticlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
    });

    const ParticlesSystem = new THREE.Points(Particles, ParticlesMaterial);
    scene.add(ParticlesSystem);

    // Камера и вращение
    camera.position.z = 10;

    const dampingFactor = 0.98; // Damping factor for gradual deceleration
    const minRotationSpeed = 0.005; // Minimum rotation speed
    let lastMouseX = 0,
      lastMouseY = 0;
    let mouseSpeedX = minRotationSpeed,
      mouseSpeedY = minRotationSpeed;
    const windowHalfX = dimensions.width / 2;
    const windowHalfY = dimensions.height / 2;

    const onPointerMove = (event: MouseEvent) => {
      const mouseX = event.clientX - windowHalfX;
      const mouseY = event.clientY - windowHalfY;

      mouseSpeedX = (mouseX - lastMouseX) * 0.001;
      mouseSpeedY = (mouseY - lastMouseY) * 0.001;

      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    document.addEventListener("pointermove", onPointerMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate based on mouse speed
      ParticlesSystem.rotation.x += mouseSpeedY;
      ParticlesSystem.rotation.y += mouseSpeedX;

      // Apply damping to gradually reduce the speed
      mouseSpeedX *= dampingFactor;
      mouseSpeedY *= dampingFactor;

      // Ensure minimum rotation speed
      if (Math.abs(mouseSpeedX) < minRotationSpeed) {
        mouseSpeedX = Math.sign(mouseSpeedX) * minRotationSpeed;
      }
      if (Math.abs(mouseSpeedY) < minRotationSpeed) {
        mouseSpeedY = Math.sign(mouseSpeedY) * minRotationSpeed;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.removeEventListener("pointermove", onPointerMove);

      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [dimensions]);

  return <div ref={mountRef} className="relative h-full w-full" />;
};

export default Particles;
