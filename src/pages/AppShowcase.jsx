import React, { useState } from 'react';

function AppShowcase() {
  const [selectedApp, setSelectedApp] = useState(null);
  const apps = [
    { name: "YouTube VR", desc: "신나는 360도 세계 감상", img: "🟥" },
    { name: "Beat Saber", desc: "리듬에 맞춰 비트를 베는 VR 리듬", img: "🟦" },
    { name: "VRChat", desc: "전 세계 사람들과 소통", img: "🟩" },
    { name: "Roblox", desc: "나만의 가상 월드 만들기", img: "🟫" },
    { name: "Instagram", desc: "대화면으로 즐기는 피드", img: "🟪" }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' }}>
      
      {/* 콘텐츠 리스트 (페이지 6) */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ flex: 1, height: '200px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '40px' }}>▶️</span>
          <h3 style={{ margin: '15px 0 5px 0' }}>YouTube VR</h3>
        </div>
        <div onClick={() => setSelectedApp(apps[1])} style={{ flex: 1, height: '200px', backgroundColor: '#1e3a8a', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'white' }}>
          <h3 style={{ margin: '15px 0 5px 0' }}>Beat Saber</h3>
          <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>리듬에 맞춰 비트를 베는 VR 게임</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {apps.slice(2).map((app, index) => (
          <div key={index} style={{ padding: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>{app.img}</div>
            <h4 style={{ margin: '0 0 5px 0' }}>{app.name}</h4>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </div>

      {/* 앱 상세 팝업 (페이지 6-1) */}
      {selectedApp && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15, 23, 42, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: 'white', width: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            
            <div style={{ height: '200px', backgroundColor: '#1e3a8a', position: 'relative' }}>
              <button onClick={() => setSelectedApp(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </div>
            
            <div style={{ padding: '30px' }}>
              <h2 style={{ margin: '0 0 15px 0', fontSize: '22px' }}>{selectedApp.name}</h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                "리듬에 맞춰 플레이어에게... 다가오는 비트를 베어내야 하는 개성 있는 VR 게임입니다."
              </p>
              <button style={{ width: '100%', padding: '15px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                36,000원
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppShowcase;