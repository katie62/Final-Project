import React from "react";
import What from "../../assets/what_is.jpg";
import "./About.css";
import Computer from '../../assets/Computer.png'
import Edu from '../../assets/Edu.png'
import Art from '../../assets/Art.png'
import Game from '../../assets/Game.png'
import meram from '../../assets/meram.png'
import mem from '../../assets/mem.png'
import erbakan from '../../assets/Erbakan.png'



const About = () => {
  return (
    <div>

    


      <div className="container">
        <img src={What} alt="hero" className="hero" />
        <hr />

        <div className="info">
          <iframe
            className="lvideo col-sm-8"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AS9dqqLzr6I?si=7mGKTGuhg7GseCLX&amp;start=35"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div><h2 className="mega col-sm-4">Mega Nedir?</h2>
          <p className="para">
            Toplum hayatı
            açısından ilerlemek ve mesafe kat edebilmek için bir neslin
            kendinden sonraki nesle aktaracağı tecrübe ve birikimlerle mümkün
            olacağı bilinen temel bir gerçektir. Günümüzde giderek karmaşıklaşan
            bilgi ve becerileri kazanabilen ve bu bilgilerin hızlı değişimine
            ayak uydurabilen bireylerin yetiştirilmesine ihtiyaç
            duyulmaktadır.Bu kapsamda YENİ NESİL EĞİTİM PROJESİ ile hem dijital
            bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z kuşağı ve Alfa
            kuşağının farklılaşan eğitim beklentilerine cevap vermek hem de
            önceki nesillerin kültürel aktarımını gerçekleştirecek ve nesiller
            arası iletişimi kuvvetlendirecek “yeni” bir çalışmadır.Temel eğitim,
            ortaöğretim, yüksek öğretim kurumları, sivil toplum kuruluşları ve
            meslek birliklerinin paydaşlığında bireylerin karakter eğitimi
            gerçekleştirilecektir.
          </p></div>
          
          
        </div>
      </div>

      <div>
        
          <h2 className="aims">Neler Yapıyoruz?</h2>
          <div className="works">
          <img src={Computer} alt="Computer" className="computer"/>
          <img src={Edu} alt="Edu" className="edu"/>
          <img src={Art} alt="Art" className="art"/>
          <img src={Game} alt="Game" className="game"/>
          </div>
          <div className="paras">
            <p className="parat">Teknoloji desteği sağlıyoruz</p>
            <p className="parae">Birebir Eğitim ile öğrencilerimize Akademik destek sağlıyoruz</p>
            <p className="paraa">Farklı Atölyeler ve Kurslar Açıyoruz</p>
            <p className="parag">Sosyal Aktiviteler ve E-spor Turnuvları düzenliyoruz</p>
          </div>
      </div>

      
      <div class="logos">
        <h2 className="partner">Paydaşlarımız</h2>

      <div class="logos-slide">
        <img src={meram} />
        <img src={mem} />
        <img src={erbakan} />
      </div>

      <div class="logos-slide">
        <img src={meram} />
        <img src={mem} />
        <img src={erbakan} />
      </div>

      
    
      </div>
    
    </div>
  );
};

export default About;
