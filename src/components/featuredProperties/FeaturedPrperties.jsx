import "./featuredproferties.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const FeaturedPrperties = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
       
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };

  return (
    <>
      <Slider {...setting}>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
            alt="featuredImg"
          />
          <span className="name">Aparthotel Stare Miasto</span>
          <span className="city">Madrid</span>
          <span className="price">Start from $120</span>
          <div className="rating">
            <button>8.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default FeaturedPrperties;
