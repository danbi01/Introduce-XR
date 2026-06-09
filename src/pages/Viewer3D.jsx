import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function QuestModel() {
  const { scene } = useGLTF('/scene.glb');
  return <primitive object={scene} scale={7} position={[0, 0.2, 0]} />;
}


function Viewer3D() {
  const [selectedModel, setSelectedModel] = useState('Meta Quest 3S');
  const [showPurchase, setShowPurchase] = useState(false);
  const purchaseRef = useRef(null);

  const handleBuyClick = () => {
    setShowPurchase(true);
    setTimeout(() => {
      purchaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div style={{
      padding: '60px 20px',
      maxWwidth: '1000px',
      width: '80%',
      height: '100%',
      margin: '40px auto',
      fontFamily: 'Arial'
    }}>

      {/* 3D */}
      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>

        <h1 style={{
          fontSize: '48px',
          color: '#000000',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          메타퀘스트 3D 둘러보기</h1>

        <h2>기기를 클릭해서 움직여보세요</h2>

        <div style={{
          height: '600px',
          backgroundColor: '#f1f5f9',
          borderRadius: '20px',
          margin: '0 auto'
        }}>

          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <QuestModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {!showPurchase && (
          <button onClick={handleBuyClick}
            style={{
              marginTop: '30px',
              padding: '15px 40px',
              backgroundColor: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
            구매하기
          </button>
        )}
      </div>


      {showPurchase && (
        <div ref={purchaseRef}
          style={{
            display: 'flex',
            gap: '40px', backgroundColor: '#ffffff',
            padding: '40px', borderRadius: '20px',
            border: '1px solid #e2e8f0'
          }}>


          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>

            <img
              src={selectedModel === 'Quest 3S' ? '/meta3s.webp' : '/meta.webp'}
              alt="메인 기기"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'contain',
                backgroundColor: '#f1f5f9',
                borderRadius: '15px',
                padding: selectedModel === 'Quest 3S' ? '43px' : '0px',
                boxSizing: 'border-box'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <img src="/controller.webp" alt="컨트롤러"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '10px'
                }} />

              <img src="/meta2.webp" alt="측면1"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '10px'
                }} />

              <img src="/meta3.webp" alt="측면2"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '10px'
                }} />

            </div>
          </div>


          <div style={{
            flex: 1.2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>

            <h3>모델, 당신에게 딱 맞는 모델은?</h3>


            <div onClick={() => setSelectedModel('Meta Quest 3S')}
              style={{
                padding: '20px',
                border: selectedModel === 'Meta Quest 3S' ? '2px solid #1e3a8a' : '1px solid #cbd5e1',
                borderRadius: '15px',
                marginBottom: '15px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <b>Meta Quest 3S</b>
              <span style={{ color: '#64748b' }}>₩ 715,000</span>
            </div>


            <div onClick={() => setSelectedModel('Meta Quest 3')}
              style={{
                padding: '20px',
                border: selectedModel === 'Meta Quest 3' ? '2px solid #1e3a8a' : '1px solid #cbd5e1',
                borderRadius: '15px',
                marginBottom: '25px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <b>Meta Quest 3</b>
              <span style={{ color: '#64748b' }}>₩ 957,000</span>
            </div>

            <button style={{
              padding: '16px',
              backgroundColor: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>

              {selectedModel} 결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viewer3D;