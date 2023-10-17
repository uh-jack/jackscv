import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MeshNormalMaterial, PerspectiveCamera, SphereGeometry, WebGLRenderer, Vector3 } from 'three';
import { noise } from 'perlin';

extend({ MeshNormalMaterial, PerspectiveCamera, SphereGeometry, WebGLRenderer });

const SphereComponent = () => {
    const sphereRef = useRef();

    // Update function to modify the geometry
    const update = (time) => {
        const k = 3;

        if (!sphereRef.current || !sphereRef.current.geometry || !sphereRef.current.geometry.attributes.position) {
            return;
        }

        const positions = sphereRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            const p = new Vector3(positions[i], positions[i + 1], positions[i + 2]);
            p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
            positions[i] = p.x;
            positions[i + 1] = p.y;
            positions[i + 2] = p.z;
        }

        sphereRef.current.geometry.attributes.position.needsUpdate = true;
        sphereRef.current.geometry.computeVertexNormals();
    };

    // Animation loop
    useFrame(() => {
        const time = performance.now() * 0.003;
        update(time);
    });

    const { size } = useThree();
    const aspect = size.width / size.height;

    return (
        <mesh ref={sphereRef} geometry={new SphereGeometry(1, 128, 128)} material={new MeshNormalMaterial()} />
    );
};

const SceneComponent = () => (
    <Canvas
        camera={{ position: [0, 0, 5], fov: 30, near: 0.1, far: 1000 }}
        style={{ backgroundColor: 'transparent' }}
    >
        <SphereComponent />
        <OrbitControls enableZoom={false} /> {/* Disable zoom */}
    </Canvas>
);

export default SceneComponent;
