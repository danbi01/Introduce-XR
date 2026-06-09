import React, { useState } from 'react';

function Concept() {

  const [activeTab, setActiveTab] = useState('XR이란?');


  const conceptData = {
    'XR이란?': [
      "XR은 가상 현실(VR), 증강 현실(AR), 혼합 현실(MR)을 모두 아우르는 몰입형 확장 기술입니다.",
      "현실 환경 위에 가상 정보를 결합하여, 디지털 물체와 실제 세계가 실시간으로 상호작용하는 환경을 구현합니다.",
      "물리적 환경의 제약을 넘어 디지털 경험을 현실 세계로 확장하는 차세대 공간 컴퓨팅 기술입니다."
    ],
    'VR, AR과 비교': [
      "가상현실(VR)은 100% 컴퓨터 그래픽으로 만들어진 완전한 가상 세계를 의미합니다.",
      "증강현실(AR)은 현실 세계 위에 가상의 이미지나 정보를 겹쳐서 보여주는 기술입니다.",
      "XR은 이러한 기술을 통합하여 현실과 가상을 넘나드는 새로운 경험을 가능하게 하는 확장된 기술입니다."
    ],
    'XR의 전망': [
      "스마트폰 시대를 넘어 일상과 업무 환경을 바꿀 차세대 핵심 모바일 플랫폼으로 주목받고 있습니다.",
      "엔터테인먼트, 게임뿐만 아니라 의료, 교육, 산업 현장 등 다양한 분야로 확장 중입니다.",
      "스마트 안경 등 다양한 기기의 발전과 함께 일상생활에 혁신적인 변화를 가져올 것입니다."
    ]
  };

  return (
    <div className="bg" style={{ padding: '60px 20px', maxWidth: '1000px', height: '100%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
        

        {Object.keys(conceptData).map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            style={{ 
              padding: '15px 40px', borderRadius: '40px', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px', border: 'none',
              
              backgroundColor: activeTab === tab ? '#7c85a3' : '#e2e4ea', 
              color: activeTab === tab ? 'white' : '#ffffff',
            }}>
            {tab}
          </button>
        ))}
      </div>
      
      
      <div style={{ display: 'flex', backgroundColor: '#f9f9f9', borderRadius: '30px', overflow: 'hidden', minHeight: '300px' }}>
        
        {/* 왼쪽 박스 */}
        <div style={{ flex: '0 0 30%', backgroundColor: '#7c85a3', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', margin: 0, textAlign: 'center', wordBreak: 'keep-all' }}>
            {activeTab}
          </h2>
        </div>

        {/* 오른쪽 박스 */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 50px' }}>
          

          {conceptData[activeTab].map((text, index) => (

            <div key={index} style={{ borderBottom: '1px dashed #7c85a3', padding: '25px 0' }}>
            <p style={{ fontSize: '18px', color: '#111', fontWeight: '600', margin: 0, textAlign: 'center' }}>
            {text}
    </p>
  </div>
))}

        </div>
      </div>

    </div>
  );
}

export default Concept;