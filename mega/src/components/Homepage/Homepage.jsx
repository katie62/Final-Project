import React, { useState } from "react";
import Cover from "../../assets/cover.png";
import "./Homepage.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Homepage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="homepage">
      <div>
        <img className="cover" src={Cover} alt="cover" />
      </div>
      <hr />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counter">
          <h1>
            MEGA Olarak Her Yıl <br />
            {counterOn && (
              <CountUp
                start={0}
                end={75000}
                duration={2}
                delay={0}
                className="number"
              />
            )}{" "}
            + Öğrencinin Hayatına Dokunuyoruz.
          </h1>
        </div>
      </ScrollTrigger>

      <div className="info">
        
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T6YfF_lNrUU?si=fPKSpnO1aNXYx3Pw&amp;start=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video col-sm-4"
          ></iframe>

          
            <h2 className="head">MEGA Nedir?</h2>
            <p className="para">
              Toplum hayatı açısından ilerlemek ve mesafe kat edebilmek için bir
              neslin kendinden sonraki nesle aktaracağı tecrübe ve birikimlerle
              mümkün olacağı bilinen temel bir gerçektir. Günümüzde giderek
              karmaşıklaşan bilgi ve becerileri kazanabilen ve bu bilgilerin
              hızlı değişimine ayak uydurabilen bireylerin yetiştirilmesine
              ihtiyaç duyulmaktadır. Bu kapsamda YENİ NESİL EĞİTİM PROJESİ ile
              hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z
              kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine cevap
              vermek hem de önceki nesillerin kültürel aktarımını
              gerçekleştirecek ve nesiller arası iletişimi kuvvetlendirecek
              “yeni” bir çalışmadır. Temel eğitim, ortaöğretim, yüksek öğretim
              kurumları, sivil toplum kuruluşları ve meslek birliklerinin
              paydaşlığında bireylerin karakter eğitimi gerçekleştirilecektir.
            </p>
          
        
      </div>

      
      
    </div>
  );
};

export default Homepage;
