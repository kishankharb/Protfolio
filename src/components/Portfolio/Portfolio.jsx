
import React from "react";
import "../Testimonials/Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {
  const clients = [
    {
      img: Sidebar,
      review:
"I have called on this seller before and was pleased with his work. I had another project and the complimentary nft website design someone else made was dull and boring."    },
    {
      img: Ecommerce,
      review:
"Sabirpro was an excellent communicator and went above and beyond in satisfying my requests. An extremely diligent worker and a nice person to help build your project alongside you."   },
    {
      img: HOC,
      review:
"He was very proactive and ready to go when needed. Very knowledgeable about wallets as well as nft. I am super happy with the work and so was the client. I will definitely hire him again for future work."    },
    {
      img: MusicApp,
      review:
"The service I ordered from Sabir was delivered on time. Great way of communication. Amazing person to talk to. Extremely professional. Looking forward to work with him in the future."    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial m">
                <img src={client.img} alt="" />
                {/* <span>{client.review}</span> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
