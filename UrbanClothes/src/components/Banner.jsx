import "../assets/css/Global.css";
import "../assets/css/Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="slider-container container">
          <div className="slider-item">
          <video autoPlay muted playsInline loop className="banner-img">

              <source src="../../public/assets/img/slider/young-male-model.mp4" />
            </video>

            <div className="box-content">
              <div className="container">
                <p className="">SPRING COLLECTION</p>
                <h1 className="">
                  End of
                  <br />
                  <span>Season Sale</span>
                </h1>
                <a href="shop-collection-sub.html" className="btn-slider">
                  <span>Shop collection</span>
                  <ion-icon
                    name="chevron-forward-outline"
                    className="icon"
                  ></ion-icon>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;