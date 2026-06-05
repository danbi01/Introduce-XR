import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function QuestModel() {
  const { scene } = useGLTF('/scene.glb'); 
  
  return <primitive object={scene} scale={7} position={[0, 0.2, 0]} />;
}


function Viewer3D() {
  const [selectedModel, setSelectedModel] = useState('Quest 3S'); 
  const [showPurchase, setShowPurchase] = useState(false);        
  const purchaseRef = useRef(null);                              

  //지금 구매하기 누르면~
  const handleBuyClick = () => {
    setShowPurchase(true); 
    
    //타임아웃
    setTimeout(() => {
      purchaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial' }}>
      

    
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2>메타퀘스트 3D 둘러보기</h2>
        
        {/* 3D 캔버스 도화지 */}
        <div style={{ width: '900px', height: '600px', backgroundColor: '#f1f5f9', borderRadius: '20px' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1.8} /> {/* 기본 조명 */}
            <directionalLight position={[10, 10, 10]} intensity={1.5} /> 
            
            <QuestModel /> 
            <OrbitControls enableZoom={false} /> 
          </Canvas>
        </div>
        

        {!showPurchase && (
          <button onClick={handleBuyClick} style={{ marginTop: '30px', padding: '15px 40px', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
            지금 구매하기
          </button>
        )}
      </div>

      
      {showPurchase && (
        <div ref={purchaseRef} style={{ display: 'flex', gap: '40px', backgroundColor: '#ffffff', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <img src="/meta.webp" alt="메인 기기" style={{ width: '100%', height: '220px', objectFit: 'contain', backgroundColor: '#f1f5f9', borderRadius: '15px' }} />
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <img src="/controller.webp" alt="컨트롤러" style={{ width: '60px', height: '60px', backgroundColor: '#f1f5f9', borderRadius: '10px' }} />
              <img src="/meta2.webp" alt="측면1" style={{ width: '60px', height: '60px', backgroundColor: '#f1f5f9', borderRadius: '10px' }} />
              <img src="/meta3.webp" alt="측면2" style={{ width: '60px', height: '60px', backgroundColor: '#f1f5f9', borderRadius: '10px' }} />
            </div>
          </div>


          <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3>모델, 당신에게 딱 맞는 모델은?</h3>
            
            {/* Quest 3S */}
            <div onClick={() => setSelectedModel('Quest 3S')}
                 style={{ padding: '20px', border: selectedModel === 'Quest 3S' ? '2px solid #1e3a8a' : '1px solid #cbd5e1', borderRadius: '15px', marginBottom: '15px', cursor: 'pointer', backgroundColor: selectedModel === 'Quest 3S' ? '#eff6ff' : 'white' }}>
              <b>Quest 3S</b> <span style={{ float: 'right', color: '#64748b' }}>₩ 715,000</span>
            </div>
            
            {/* Quest 3 */}
            <div onClick={() => setSelectedModel('Quest 3')}
                 style={{ padding: '20px', border: selectedModel === 'Quest 3' ? '2px solid #1e3a8a' : '1px solid #cbd5e1', borderRadius: '15px', marginBottom: '25px', cursor: 'pointer', backgroundColor: selectedModel === 'Quest 3' ? '#eff6ff' : 'white' }}>
              <b>Quest 3</b> <span style={{ float: 'right', color: '#64748b' }}>₩ 957,000</span>
            </div>

            {/* 결제하기 */}
            <button style={{ padding: '16px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
              {selectedModel} 결제하기
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Viewer3D;