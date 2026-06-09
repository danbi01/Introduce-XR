import React from "react"

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#0f0f1a',
            color: '#86868b',
            maxWidth: '1920px',
            padding: '40px 20px',
            textAlign: 'center',
            fontSize: '14px',
            borderTop: '1px solid #333',
        }}>
            <div style={{ marginBottom: '10px' }}>
                <p>배화여자대학교 웹개발실무 과제</p>
                <p>제작: 이은솔, 백단비</p>
            </div>
            <p>© 2026 Introduce-XR. All rights reserved.</p>
        </footer>
    )
}

export default Footer;