import React from 'react'

export default function SocialProof(){
  return (
    <section className="section">
      <div className="container">
        <h2>Testimoni Pelanggan</h2>
        <div className="grid" style={{marginTop:16}}>
          <div className="card">
            <p className="small">"Gitarnya memiliki karakter suara yang hangat dan unik — sangat recommended!"</p>
            <p className="small"><strong>- R. Putra</strong></p>
          </div>
          <div className="card">
            <p className="small">"Desainnya kental nusantara, saya suka detail ukiran kecilnya."</p>
            <p className="small"><strong>- Ayu Lestari</strong></p>
          </div>
          <div className="card">
            <p className="small">"Pelayanan cepat dan packaging rapi. Suara mantap!"</p>
            <p className="small"><strong>- Yoga</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}