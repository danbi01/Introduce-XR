import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

//3D 큐브
function HologramCube() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3.5, 3.5, 2]} />

      <meshStandardMaterial color="#00d2ff" wireframe={true} emissive="#00d2ff" emissiveIntensity={0.5} />
    </mesh>
  );
}
 

function Home() {
  const navigate = useNavigate();

  const btnStyle = { padding: '15px 30px', fontSize: '16px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold' };

  return (
    <div style={{ backgroundColor: '#0f0f1a', color: 'white', minHeight: 'calc(100vh - 74px)', fontFamily: 'Arial' }}>
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        
        <h1 style={{ fontSize: '48px', color: '#f3f3f3', fontWeight: '550', marginBottom: '20px' }}>XR 확장현실을 만나보세요</h1>
        <p style={{ fontSize: '22px', color: '#f3f3f3', marginBottom: '40px' }}>
          XR 기술에 대해 알아보고, 메타퀘스트 기기를 3D로 체험해봅시다.
        </p>


        <div style={{ width: '100%', height: '350px', marginBottom: '40px', cursor: 'grab' }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <HologramCube />

            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} />
          </Canvas>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button 
            onClick={() => navigate('/concept')} 
            style={{ ...btnStyle, backgroundColor: '#00d2ff', color: '#0f0f1a', border: 'none' }}>
            XR 개념 둘러보기
          </button>
          <button 
            onClick={() => navigate('/viewer')} 
            style={{ ...btnStyle, backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>
            XR 기기 둘러보기
          </button>
        </div>
      </div>


      <div style={{ backgroundColor: '#f5f5f7', color: '#1d1d1f', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: '600', marginBottom: '10px' }}>Extended Reality</h2>
        <p style={{ fontSize: '24px', color: '#1d1d1f', marginBottom: '30px' }}>지금껏 본 적 없는 새로운 경험, XR의 세계에 초대합니다!</p>
        
        
        <div style={{ textAlign: 'center', backgroundColor: '#0f0f1a' }}>
  
  
  <img 
    src="/xr.PNG" alt="XR 기술 소개" 
    style={{ 
      width: '100%',      
      height: 'auto',   
      borderRadius: '20px'
    }} 
  />
  
</div>

      </div>

    <footer style={{ 
  backgroundColor: '#0f0f1a', 
  color: '#86868b', 
  padding: '40px 20px', 
  textAlign: 'center', 
  fontSize: '14px',
  borderTop: '1px solid #333'
}}>
  <div style={{ marginBottom: '10px' }}>
    <p>배화여자대학교 웹개발실무 과제</p>
    <p>제작: 이은솔, 백단비</p>
  </div>
  <p>© 2026 Introduce-XR. All rights reserved.</p>
</footer>



    </div>
  );
}

export default Home;