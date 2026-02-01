import React, { useEffect, useState } from 'react'
import { client } from '../lib/contentfulClient'

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(()=>{
    setLoading(true)
    client.getEntries({ content_type: 'guitar' })
      .then(res => {
        const items = res.items.map(item => {
          const f = item.fields || {}
          return {
            id: item.sys?.id,
            model: f.model || '',
            stok: f.stok || 0,
            deskripsi: f.deskripsi || '',
            rating: f.rating || 0,
            harga: f.harga || '',
            warna: f.warna || '',
            gambar: f.gambar || null,
            fotoproduk: f.fotoproduk || null
          }
        })
        setProducts(items)
      })
      .catch(err => setError(err.message || 'Gagal memuat produk'))
      .finally(()=>setLoading(false))
  },[])

  if(loading) return <section className="section"><div className="container">Memuat produk...</div></section>
  if(error) return <section className="section"><div className="container">{error}</div></section>

  const waNumber = '628777808'

  function closeModal(){ setSelectedProduct(null) }

  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title">Daftar Produk</h2>
        <p className="small">Pilih gitar yang sesuai dengan karakter dan kebutuhan Anda.</p>
        <div className="grid" style={{marginTop:16}}>
          {products.map(p => {
            const imageUrl = p.fotoproduk.fields.file.url
            const message = encodeURIComponent(`Halo Indogit, saya tertarik membeli model ${p.model}. Apakah ready?`)
            return (
              <article className="card" key={p.id} aria-labelledby={`model-${p.id}`}>
                {imageUrl && <img src={imageUrl} alt={p.model} style={{width:'100%',borderRadius:8,marginBottom:12}} />}
                <h3 id={`model-${p.id}`}>{p.model}</h3>
                <p className="small" style={{margin:'6px 0'}}>{p.deskripsi ? (p.deskripsi.length > 120 ? p.deskripsi.slice(0,120) + '...' : p.deskripsi) : '-'}</p>
                <p className="small">Harga: <strong>Rp. {p.harga},00</strong> • Stok: {p.stok}</p>
                {/* <p className="small">Warna: {p.warna || '-' } • Rating: {p.rating || 0}</p> */}
                <div style={{marginTop:12,display:'flex',gap:8}}>
                  <a className="btn" href={`https://wa.me/${waNumber}?text=${message}`}>
                    <i className="fab fa-whatsapp" style={{marginRight:8}}></i>Order via WhatsApp
                  </a>
                  <button className="btn secondary" onClick={()=>setSelectedProduct({...p,imageUrl})}>Detail</button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Tutup">×</button>
            {selectedProduct.imageUrl && <img src={selectedProduct.imageUrl} alt={selectedProduct.model} />}
            <h3 id="modal-title">{selectedProduct.model}</h3>
            <p className="small" style={{margin:'6px 0'}}>{selectedProduct.deskripsi || '-'}</p>
            <p className="small">Harga: <strong>{selectedProduct.harga}</strong> • Stok: {selectedProduct.stok}</p>
            <p className="small">Warna: {selectedProduct.warna || '-' } • Rating: {selectedProduct.rating || 0}</p>
            <div style={{marginTop:12,display:'flex',gap:8}}>
              <a className="btn" href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo Indogit, saya mau membeli model ${selectedProduct.model}`)}`}>
                <i className="fab fa-whatsapp" style={{marginRight:8}}></i>Order via WhatsApp
              </a>
              <button className="btn secondary" onClick={closeModal}>Tutup</button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
