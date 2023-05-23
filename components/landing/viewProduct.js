export default function ViewProduct() {
  return (
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="owl-carousel owl-theme s_Product_carousel">
              <div className="single-prd-item">
                <img className="img-fluid" src="img/category/s-p1.jpg" alt />
              </div>
              {/* <div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt="">
						</div>
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt="">
						</div> */}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <div className="product_count">
                <a href="/#product" className="btn btn-primary rounded">
                <i className="ti-shift-left" /> Kembali
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
