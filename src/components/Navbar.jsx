import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 50px', backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea',
      position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <Link to="/" style={{ fontSize: '22px', fontWeight: '800', color: '#1e3a8a', textDecoration: 'none', letterSpacing: '-0.5px' }}>
        Extended Reality
      </Link>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Link to="/concept" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>XR 최신 뉴스</Link>
        <Link to="/showcase" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>앱 및 게임</Link>
      </div>
    </nav>
  );
}

export default Navbar;