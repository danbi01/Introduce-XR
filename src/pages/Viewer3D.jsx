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
    <div className="viewer-container">

      <div className="viewer-header">
        <h1>메타퀘스트 3D 둘러보기</h1>
        <h2>기기를 클릭해서 움직여보세요</h2>

        <div className="viewer-canvas-box">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <QuestModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {!showPurchase && (
          <button onClick={handleBuyClick} className="buy-button">
            구매하기
          </button>
        )}
      </div>

      {showPurchase && (
        <div ref={purchaseRef} className="purchase-box">

          <div className="purchase-left">
            <img
              src={selectedModel === 'Quest 3S' ? '/meta3s.webp' : '/meta.webp'}
              alt="메인 기기"
              className="purchase-main-img"
              style={{ padding: selectedModel === 'Quest 3S' ? '43px' : '0px' }}
            />

            <div className="purchase-thumbs">
              <img src="/controller.webp" alt="컨트롤러" />
              <img src="/meta2.webp" alt="측면1" />
              <img src="/meta3.webp" alt="측면2" />
            </div>
          </div>

          <div className="purchase-right">
            <h3>모델, 당신에게 딱 맞는 모델은?</h3>

            <div
              onClick={() => setSelectedModel('Meta Quest 3S')}
              className={`model-option ${selectedModel === 'Meta Quest 3S' ? 'active' : ''}`}
            >
              <b>Meta Quest 3S</b>
              <span>₩ 715,000</span>
            </div>

            <div
              onClick={() => setSelectedModel('Meta Quest 3')}
              className={`model-option ${selectedModel === 'Meta Quest 3' ? 'active' : ''}`}
            >
              <b>Meta Quest 3</b>
              <span>₩ 957,000</span>
            </div>

            <button className="purchase-btn">
              {selectedModel} 결제하기
            </button>
          </div>
        </div>
      )}
    </div>

  );
}

export default Viewer3D;