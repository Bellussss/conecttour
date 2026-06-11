import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Imports obrigatórios
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Destaques.css";

export function Destaques({ lugares, onSelect }) {
  const destaques = lugares?.slice(4, 10) || [];

  return (
    <section className="destaques-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Suaviza a troca infinita
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        // Configurações de performance para loop sem bugs:
        watchSlidesProgress={true}
        loopedSlides={2}
        className="meu-swiper"
      >
        {destaques.map((lugar) => (
          <SwiperSlide key={`banner-${lugar.id}`}>
            <div className="slide-content">
              <img src={lugar.banner} alt={lugar.title} className="slide-img" />
              <div className="slide-overlay">
                <span className="slide-badge">{lugar.category}</span>
                <h2 className="slide-title">{lugar.title}</h2>
                <p className="slide-desc">{lugar.description}</p>
                <button 
                  className="btn-conhecer" 
                  onClick={() => onSelect(lugar)}
                >
                  Conhecer Agora
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}