import React from 'react'
import './Footer.css'
import Logo from '../../assets/logol.png'



const Footer = () => {
  
  return (

    <>
    <hr />

    <footer className="footer-distributed">

			<div className="footer-left">

				<span><img className='logol' src={Logo} alt="logo" /></span>

				<p className="footer-links">
					<a href="#" className="link-1">Ana Sayfa</a>
					
					<a href="#">Hakkımızda</a>
				
					<a href="#">Projeler</a>
				
				
				</p>

				<p className="footer-company-name">Kayra Poyrazer © 2024</p>
			</div>

			<div className="footer-center">

      <span className='contact1'>İletişim</span>

				<div>
          
          
					<i className="fa fa-map-marker"></i>
					<p>📍Yenişehir Mahallesi Şehit Göksel Doğan Cd No :31 MERAM/KONYA</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>📞+90 0332 503 09 69</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:iletisim@meramgelisim.com">📧iletisim@meramgelisim.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>MEGA Hakkında</span>
					MEGA,dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine cevap vermek hem de önceki nesillerin kültürel aktarımını gerçekleştirecek ve nesiller arası iletişimi kuvvetlendirecek “yeni” bir çalışmadır.
				</p>

				<div className="footer-icons">

					<a href="https://www.facebook.com/MeramGelisim/"><i className="fa fa-facebook"></i></a>
					<a href="https://twitter.com/MeramGelisim/"><i className="fa fa-twitter"></i></a>
					<a href="https://www.youtube.com/channel/UCTzwzDbnQjupoqdcLO7NIKA"><i className="fa fa-linkedin"></i></a>
					<a href="https://www.instagram.com/meramgelisim/"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </>
  )
}

export default Footer