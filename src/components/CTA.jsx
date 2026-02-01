import React from 'react'

export default function CTA(){
  const waNumber = '628777808'
  const message = encodeURIComponent('Halo Indogit, saya ingin konsultasi sebelum membeli.')
  return (
    <section className="section" style={{background:'linear-gradient(90deg,var(--cream),#fff)'}}>
      <div className="container">
        <div className="card" style={{textAlign:'center'}}>
          <h2>Siap Mendapatkan Gitarmu?</h2>
          <p className="small">Hubungi kami sekarang untuk prefill pesan dan proses cepat melalui WhatsApp.</p>
          <div style={{marginTop:16}}>
            <a className="btn" href={`https://wa.me/${waNumber}?text=${message}`}>
              <i className="fab fa-whatsapp" style={{marginRight:8}}></i>Chat di WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
