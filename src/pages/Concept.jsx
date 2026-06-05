import React, { useState } from 'react';

function Concept() {
  const [activeTab, setActiveTab] = useState('XR');
  const concepts = {
    XR: "확장현실(XR)은 가상과 현실이 완벽하게 융합되어 공존하는 기술 생태계입니다.",
    VR: "가상현실(VR)은 완전히 차단된 가상의 공간을 만들어 몰입감을 제공합니다.",
    AR: "증강현실(AR)은 현실 세계 위에 가상의 그래픽을 덧입혀서 보여주는 기술입니다."
  };

  return (
    <div style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>XR이란?</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
        {['XR', 'VR', 'AR'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', backgroundColor: activeTab === tab ? '#0056b3' : '#ddd', color: activeTab === tab ? 'white' : 'black', border: 'none' }}>
            {tab} 개념
          </button>
        ))}
      </div>
      
      <div style={{ backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '10px', marginBottom: '50px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{concepts[activeTab]}</p>
      </div>

      <h3>XR 최신 뉴스 트렌드</h3>
      <div style={{ borderTop: '2px solid #333', paddingTop: '20px' }}>
        <p><strong>[기사]</strong> 5G와 IoT 기술 발전으로 가속화되는 스마트 안경 시대</p>
        <p><strong>[기사]</strong> 메타퀘스트 3S 출시, 확장현실 기기 대중화 이끌어</p>
      </div>
    </div>
  );
}

export default Concept;