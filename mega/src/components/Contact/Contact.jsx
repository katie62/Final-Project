import React from 'react'
import './Contact.css'
import Facebook from '../../assets/Facebook.png'
import X from '../../assets/X.png'
import Youtube from '../../assets/Youtube.png'
import Instagram from '../../assets/Instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">
            🌐İletişim
            </h1>
            <span className="contactDesc">
                Bize ulaşmak için aşağıdaki formu doldurabilirsiniz!
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='İsim' />
                <input type="email" className="email" placeholder='E-mail' />
                <textarea className='msg' name="message"  rows="5" placeholder='Mesajınız'></textarea>
                <button type='submit' value='Send' className="submitBtn">Gönder</button>
                <div className="links">
                  <a target='_blank' href='https://www.facebook.com/MeramGelisim/'><img src={Facebook} alt="Facebook" className="linkf" /></a>
                  <a target='_blank' href='https://twitter.com/MeramGelisim/'><img src={X} alt="X" className="linkx" /></a>
                  <a target='_blank' href='https://www.youtube.com/channel/UCTzwzDbnQjupoqdcLO7NIKA'><img src={Youtube} alt="Youtube" className="linky" /></a>
                  <a target='_blank' href='https://www.instagram.com/meramgelisim/'><img src={Instagram} alt="Insatgram" className="linki" /></a>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact