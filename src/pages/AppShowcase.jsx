import React, { useState } from 'react';
import './AppShowcase.css'; 

function AppShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bottomApps = [
    { name: "VRChat", desc: "무한한 가능성의 공간을 상상해 보세요." },
    { name: "Roblox", desc: "수백만 가지의 경험" },
    { name: "Instagram", desc: "Instagram에 소중한 순간을 공유해보세요." }
  ];

  return (
    <>
      <div className="showcase-container">
        <div className="main-content">
          <div className="featured-apps">
            
            <div className="featured-app-card">
              <h2 className="app-title">Youtube VR</h2>
              <p className="app-desc">전과 다른 YouTube 세상</p>
              <div className="image-container yt-placeholder">
                <img src="/youtubevr.jpg" alt="Youtube VR" className="app-image" />
              </div>
            </div>

            <div 
              className="featured-app-card clickable-card" 
              onClick={() => setIsModalOpen(true)}
            >
              <h2 className="app-title">Beat Saber</h2>
              <p className="app-desc">리듬에 맞춰 비트를 베는 VR 게임</p>
              <div className="image-container bs-placeholder">
                <img src="/beat.webp" alt="Beat Saber" className="app-image" />
              </div>
            </div>
          </div>

          <div className="sub-apps-container">
            {bottomApps.map((app, index) => (
              <div key={index} className="sub-app-item">
                <div className="sub-app-icon"></div>
                <div>
                  <h4 className="sub-app-title">{app.name}</h4>
                  <p className="sub-app-desc">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-box">
              <img src="/beat.webp" alt="Beat Saber" className="modal-image" />
            </div>
            
            <div className="modal-info-box">

              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                ✕
              </button>

              <h2 className="modal-title">Beat Saber</h2>
              <p className="modal-desc">
                Beat Saber는 리듬에 맞춰 플레이어에게 작은 큐브 형태로 다가오는 비트를 베어내야 하는 개성 있는 VR 게임입니다. 
              </p>
              <button className="modal-price-btn">36,000원</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppShowcase;