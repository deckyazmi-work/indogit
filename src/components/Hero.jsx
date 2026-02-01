import React from 'react'

export default function Hero(){
  const waNumber = '628777808'
  const prefill = encodeURIComponent('Halo Indogit, saya tertarik membeli gitar. Bisa bantu?')
  return (
    <header className="hero section">
      <div className="container">
        <h1>Indogit — Gitar Luthier dengan Sentuhan Nusantara</h1>
        <p className="small">Gitar handmade oleh luthier lokal yang menyulam tradisi Indonesia ke setiap senarnya. Suara hangat, desain khas, cerita yang melekat.</p>
        <div style={{marginTop:20,display:'flex',gap:12}}>
          <a href="#products" className="btn">Lihat Produk</a>
          <a className="btn" href={`https://wa.me/${waNumber}?text=${prefill}`}>
            <i className="fab fa-whatsapp" style={{marginRight:8}}></i>
            Beli Sekarang
          </a>
        </div>
      </div>
    </header>
  )
}
