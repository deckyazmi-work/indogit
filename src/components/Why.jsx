import React from 'react'

export default function Why(){
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title">Kenapa Memilih Indogit?</h2>
        <p className="small">Kami menggabungkan kearifan lokal dengan teknik pembuatan gitar terbaik agar Anda mendapatkan instrumen unik yang bernyawa.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:20}}>
          <div className="card">
            <h3><i className="fa fa-hand-holding-heart" style={{marginRight:8}}></i>Handmade</h3>
            <p className="small">Setiap gitar dibuat teliti oleh luthier dengan proses manual dan kontrol kualitas ketat.</p>
          </div>
          <div className="card">
            <h3><i className="fa fa-map-marker-alt" style={{marginRight:8}}></i>Ciri Khas Indonesia</h3>
            <p className="small">Desain yang mengangkat motif Nusantara dan bahan lokal pilihan.</p>
          </div>
          <div className="card">
            <h3><i className="fa fa-tree" style={{marginRight:8}}></i>Bahan Terpilih</h3>
            <p className="small">Bahan kayu dan material lainnya dipilih untuk kehangatan nada dan daya tahan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}