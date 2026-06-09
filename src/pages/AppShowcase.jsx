import React, { useState } from 'react';

function AppShowcase() {
  const [isModalOpen_beat, setIsModalOpen_beat] = useState(false);
  const [isModalOpen_youtube, setIsModalOpen_youtube] = useState(false);

  const bottomApps = [
    { name: "VRChat", desc: "무한한 가능성의 공간을 상상해 보세요.", image: "/VRChat.webp" },
    { name: "Roblox", desc: "수백만 가지의 경험" , image: "/roblox.webp" },
    { name: "Instagram", desc: "Instagram에 소중한 순간을 공유해보세요.", image: "/instagram.webp" }
  ];

  return (
    <>
      <div className="showcase-container">
        <div className="main-content">
          <div className="featured-apps">
            
            <div className="featured-app-card clickable-card" onClick={() => setIsModalOpen_youtube(true)}>
              <h2 className="app-title">Youtube VR</h2>
              <p className="app-desc">전과 다른 YouTube 세상</p>
              <div className="image-container yt-placeholder">
                <img src="/youtubeVR.jpg" alt="Youtube VR" className="app-image" />
              </div>
            </div>

            <div 
              className="featured-app-card clickable-card" onClick={() => setIsModalOpen_beat(true)}
            >
              <h2 className="app-title">Beat Saber</h2>
              <p className="app-desc">리듬에 맞춰 비트를 베는 VR 게임</p>
              <div className="image-container bs-placeholder">
                <img src="/beatSaber.webp" alt="Beat Saber" className="app-image" />
              </div>
            </div>
          </div>

          <div className="sub-apps-container">
            {bottomApps.map((app, index) => (
              <div key={index} className="sub-app-item">
                <div className="sub-app-icon">
                  <img src={app.image} alt={app.name} />
                </div>
                <div>
                  <h4 className="sub-app-title">{app.name}</h4>
                  <p className="sub-app-desc">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen_beat && (
        <div className="modal-overlay" onClick={() => setIsModalOpen_beat(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-box">
              <img src="/beatSaber.webp" alt="Beat Saber" className="modal-image" />
            </div>
            
            <div className="modal-info-box">

              <button className="modal-close-btn" onClick={() => setIsModalOpen_beat(false)}>
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
      {isModalOpen_youtube && (
        <div className="modal-overlay" onClick={() => setIsModalOpen_youtube(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-box">
              <img src="/youtubeVR.jpg" alt="Youtube VR" className="modal-image" />
            </div>
            
            <div className="modal-info-box">

              <button className="modal-close-btn" onClick={() => setIsModalOpen_youtube(false)}>
                ✕
              </button>

              <h2 className="modal-title">Youtube VR</h2>
              <p className="modal-desc">
                좋아하는 YouTube 채널, 동영상, 크리에이터를 가상 현실 환경에서 만나 보세요.
                YouTube VR 앱은 플랫폼에 있는 모든 동영상에 가상 현실 경험을 더해 사용자가 화면 속으로 들어가 탐험할 수 있는 3D 세상으로 YouTube를 재창조합니다.
              </p>
              <button className="modal-price-btn">무료</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppShowcase;