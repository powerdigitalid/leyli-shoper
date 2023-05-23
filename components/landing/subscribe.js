export default function Subcribe() {
  return (
    <>
      <section className="subscribe-position">
        <div className="container">
          <div className="subscribe text-center">
            <h3 className="subscribe__title">Untuk Mendapatkan Informasi Lebih Lanjut dan Pengaduan</h3>
            <p>
              Hubungi Kami di <a >WhatsApp</a>
            </p>
            <div id="mc_embed_signup">
                <a
                  className="button button-subscribe mr-auto mb-1"
                  type="submit"
                  href="https://wa.me/6281234567890"
                >
                  Hubungi Admin
                </a>
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    tabIndex={-1}
                    defaultValue
                    type="text"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
