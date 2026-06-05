import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 스스로 회전하는 홀로그램 큐브 컴포넌트
function HologramCube() {
  const cubeRef = useRef();

  // useFrame은 매 순간(프레임)마다 실행되어 애니메이션을 만듭니다.
  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3.5, 3.5, 2]} />
      {/* wireframe=true 로 설정하면 면이 채워지지 않고 홀로그램처럼 선(뼈대)만 보입니다! */}
      <meshStandardMaterial color="#00d2ff" wireframe={true} emissive="#00d2ff" emissiveIntensity={0.5} />
    </mesh>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#0f0f1a', color: 'white', minHeight: 'calc(100vh - 74px)', fontFamily: 'Arial' }}>
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', color: '#ccc',marginBottom: '20px' }}>XR 확장현실을 만나보세요</h1>
        <p style={{ fontSize: '18px', color: '#ccc', marginBottom: '20px' }}>
          누구나 XR 기술을 쉽게 이해하고 메타퀘스트 기기를 3D로 체험해 볼 수 있습니다.
        </p>

        {/* 🚀 홀로그램 큐브가 들어가는 3D 캔버스 영역 */}
        <div style={{ width: '100%', height: '350px', marginBottom: '40px', cursor: 'grab' }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <HologramCube />
            {/* 사용자가 마우스로 돌려볼 수 있게 해주는 기능 (자동 회전도 약간 추가) */}
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} />
          </Canvas>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button onClick={() => navigate('/concept')} style={{ padding: '15px 30px', fontSize: '16px', backgroundColor: '#00d2ff', color: '#0f0f1a', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold' }}>
            XR 개념 둘러보기
          </button>
          <button onClick={() => navigate('/viewer')} style={{ padding: '15px 30px', fontSize: '16px', backgroundColor: 'transparent', border: '2px solid white', color: 'white', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold' }}>
            XR 기기 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;