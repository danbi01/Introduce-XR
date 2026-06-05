import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function PlaceholderModel() {
  return (
    <mesh castShadow>
      <boxGeometry args={[2.5, 1.2, 1.5]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function Viewer3D() {
  const [selectedModel, setSelectedModel] = useState('Quest 3S');
  const [showPurchase, setShowPurchase] = useState(false);
  const purchaseRef = useRef(null);

  const handleBuyClick = () => {
    setShowPurchase(true);
    setTimeout(() => {
      purchaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box', fontFamily: 'Arial' }}>
      
      {/* 3D 뷰어 화면 */}
      <div style={{ textAlign: 'center', marginBottom: '50px', width: '100%', boxSizing: 'border-box' }}>
        <h2 style={{ fontSize: '26px', color: '#1e293b', marginBottom: '30px' }}>메타퀘스트 3D 둘러보기</h2>
        
        <div style={{ width: '100%', height: '400px', backgroundColor: '#f1f5f9', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxSizing: 'border-box' }}>
          <Canvas style={{ width: '100%', height: '100%', display: 'block' }} camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.8} /> 
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <PlaceholderModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        
        {!showPurchase && (
          <button 
            onClick={handleBuyClick}
            style={{ marginTop: '30px', padding: '15px 40px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            지금 구매하기
          </button>
        )}
      </div>

      {/* 기기 구매 화면 */}
      {showPurchase && (
        <div ref={purchaseRef} style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'stretch', 
          backgroundColor: '#ffffff', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '1px solid #e2e8f0', 
          width: '100%', // 가로 100% 꽉 채우기
          boxSizing: 'border-box', // 패딩(40px)이 가로 크기를 넓히지 못하게 방어막 치기
          overflow: 'hidden' // 만약 넘쳐도 무조건 잘라버리기
        }}>
          
          {/* 왼쪽 썸네일 영역 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', minWidth: 0, boxSizing: 'border-box' }}>
            <div style={{ backgroundColor: '#f1f5f9', height: '220px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '50px' }}>🥽</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #cbd5e1' }}>🎮</div>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #cbd5e1' }}>🎮</div>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #cbd5e1' }}>🔌</div>
            </div>
          </div>

          {/* 결제 버튼 영역 */}
          <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, boxSizing: 'border-box' }}>
            <h3 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '20px', marginTop: 0 }}>모델, 당신에게 딱 맞는 모델은?</h3>
            
            <div onClick={() => setSelectedModel('Quest 3S')}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', border: selectedModel === 'Quest 3S' ? '2px solid #1e3a8a' : '1px solid #cbd5e1', borderRadius: '15px', marginBottom: '15px', cursor: 'pointer', backgroundColor: selectedModel === 'Quest 3S' ? '#eff6ff' : 'white', boxSizing: 'border-box' }}>
              <span style={{ fontWeight: 'bold', color: selectedModel === 'Quest 3S' ? '#1e3a8a' : '#334155' }}>Quest 3S</span>
              <span style={{ color: '#64748b', fontWeight: 'bold' }}>₩ 715,000</span>
            </div>
            
            <div onClick={() => setSelectedModel('Quest 3')}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', border: selectedModel === 'Quest 3' ? '2px solid #1e3a8a' : '1px solid #cbd5e1', borderRadius: '15px', marginBottom: '25px', cursor: 'pointer', backgroundColor: selectedModel === 'Quest 3' ? '#eff6ff' : 'white', boxSizing: 'border-box' }}>
              <span style={{ fontWeight: 'bold', color: selectedModel === 'Quest 3' ? '#1e3a8a' : '#334155' }}>Quest 3</span>
              <span style={{ color: '#64748b', fontWeight: 'bold' }}>₩ 957,000</span>
            </div>

            <button style={{ width: '100%', padding: '16px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxSizing: 'border-box' }}>
              {selectedModel} 결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viewer3D;