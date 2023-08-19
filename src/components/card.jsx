import { locations } from "../assets/mock-data";
import StarIcon from "@mui/icons-material/Star";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const card = () => {
  const CardData =
    locations &&
    locations.map((item) => {
      return (
        <div className="cards" key={item.id}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-container"
          >
            {item.locationImages &&
              item.locationImages.map((img) => {
                return (
                  <SwiperSlide key={img.id}>
                    <img src={img.url} className="card-img" />
                    <div className="swiper-pagination"></div>
                  </SwiperSlide>
                );
              })}
          </Swiper>

          <div className="card-header">
            <div className="card-header-item">
              <h3>{item.location}</h3>
            </div>
            <div className="card-header-item2">
              <span className="card-header-item2-icon">
                <StarIcon />
              </span>
              <span className="card-header-item2-rating">{item.rating}</span>
            </div>
          </div>
          <div className="card-header-item3">
            <p className="days">{item.days}</p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      );
    });
  return <div className="container">{CardData}</div>;
};

export default card;
