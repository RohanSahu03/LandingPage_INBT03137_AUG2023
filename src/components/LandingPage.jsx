import React from 'react'
import style from '../css/landing.module.css'
import { FaTruck } from 'react-icons/fa'
import { TbReplace } from 'react-icons/tb'
import { BiShieldQuarter } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { BsCurrencyRupee} from 'react-icons/bs'
import { MdEmail, MdLocalPhone,MdLocationOn } from 'react-icons/md'
import Footer from './Footer'



function LandingPage() {

function changeImage(item){
 let ab = document.getElementById('mainImg')
  ab.src = item
}

  return (
    <div>
      
        <div className={style.outerDiv}>
          <div className={style.innerDiv}>
          <div className={style.productImg}>
            <div className={style.mainImg}>
              <img src={`https://rukminim2.flixcart.com/image/416/416/kosxzm80/power-bank/u/r/l/power-bank-boost-pro-30000mah-18w-pb3018zm-mi-original-imag36gvpqba2kn5.jpeg?q=70`} alt=""
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kosxzm80/power-bank/u/r/l/power-bank-boost-pro-30000mah-18w-pb3018zm-mi-original-imag36gvpqba2kn5.jpeg?q=70')} />
              <img src={`https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70`} alt="" 
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70')}/>
              <img src={`https://rukminim2.flixcart.com/image/416/416/kosxzm80/power-bank/m/l/x/power-bank-boost-pro-30000mah-18w-pb3018zm-mi-original-imag36gvkgghfyc4.jpeg?q=70`} alt="" 
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kosxzm80/power-bank/m/l/x/power-bank-boost-pro-30000mah-18w-pb3018zm-mi-original-imag36gvkgghfyc4.jpeg?q=70')} />
              <img src={`https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/i/x/y/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag3242ftbcezh5.jpeg?q=70`} alt="" 
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/i/x/y/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag3242ftbcezh5.jpeg?q=70')} />
              
              <img src={`https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/9/v/i/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag3242fxxj7eyw.jpeg?q=70`} alt="" 
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/9/v/i/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag3242fxxj7eyw.jpeg?q=70')} />
              <img src={`https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/0/a/m/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag32428bymeqzm.jpeg?q=70`} alt=""
                onMouseOver={() => changeImage('https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/0/a/m/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag32428bymeqzm.jpeg?q=70')} />
            </div>
            <div className={style.sideImg}>
              <img id='mainImg' src={`https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70`} alt="" />
              
            </div>
          
          </div>
          <div className={style.productDetails}>
                <div className={style.bio}>
              <span>Mi3i 30000 mAh Power Bank (Fast Charging,18W)</span> 
              <br />
              <FaStar className={style.star}/>
              <FaStar className={style.star} />
              <FaStar className={style.star} />
              <FaStar className={style.star} /> 
             
                  <p>A portable charger designed to recharge your electronic devices when you're on the move.
                This powerbank's lithium-polymer battery ensures efficient and safe performance. It is equipped
                 with three output ports to help you charge up to three devices simultaneously. 
                  </p>
              <br />
                  <h2>
                  <BsCurrencyRupee />3,299   
                  </h2>
                 
                  <h5>
                    <strike>4,999</strike> 34% off
                  </h5>
              <div className={style.iconDiv}>
                <div className={style.deliveryCharge}>
                  <FaTruck style={{ width: '100%', color:' #535c68', fontSize: '22px' }} />
                  <p>free delivery</p>
                </div>
                <div className={style.replacementPeriod}>
                  <TbReplace style={{ width: '100%', color: ' #535c68', fontSize: '22px' }} />
                  <p> 7 day Replacement</p>
                </div>
                <div className={style.warrantyPeriod}>
                  <BiShieldQuarter style={{ width: '100%', color: ' #535c68', fontSize: '22px' }} />
                  <p>1 year Warranty</p>
                </div>
               </div>
          </div>
        </div>
        </div>
        </div>

      <div className={style.outerContainer}>
        <div className={style.container} data-aos="fade-left">
          <div className={style.productImg}>
            <div className={style.sideImg}>
              <img id='mainImg' src={`https://rukminim2.flixcart.com/image/416/416/kon887k0/power-bank/d/a/j/power-bank-boost-pro-30000mah-18w-30000-pb3018zm-mi-original-imag3242mz92rpfx.jpeg?q=70`} alt="" />
            </div>
          </div>
          <div className={style.productDetails}>
            <div className={style.bio}>
              <span>Safe and Efficient Charging</span>
              <br />
              <p>The Mi Boost Pro 30000 mAh powerbank features a lithium-polymer 
                battery equipped with unique resistance-capacitance sensors. 
                These sensors ensure a steady discharge voltage and enhance the 
                charging conversion rates to provide an efficient charging performance</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.outerContainer}>
        <div className={style.container} data-aos="fade-right">
           <div className={style.productImg}>
            <div className={style.sideImg}>
              <img id='mainImg' src={`https://rukminim2.flixcart.com/image/416/416/kosxzm80/power-bank/o/s/q/power-bank-boost-pro-30000mah-18w-pb3018zm-mi-original-imag36gvvzynfuaf.jpeg?q=70`} alt="" />
            </div>
          </div>
          <div className={style.productDetails}>
            <div className={style.bio}>
              <span>Triple Port Output</span>
              <br />
              <p>Featuring a triple port output, this powerbank lets you charge multiple
                 devices at the same time. Additionally, it offers 18 W fast charging 
                 support to help you quickly charge compatible devices.</p>
            </div>
          </div>
         
        </div>
      </div>

      <div className={style.outerContainer}>
        <div className={style.container} data-aos="fade-left">
          <div className={style.productImg}>
            <div className={style.sideImg}>
              <img id='mainImg' src={`https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/48664945b2ad461c96b0c9c2fe0b48a3_1798b2f1119_image.png?q=90`} alt="" />
            </div>
          </div>
          <div className={style.productDetails}>
            <div className={style.bio}>
              <span>Power Delivery 3.0</span>
              <br />
              <p>This powerbank features Power Delivery 3.0 (PD 3.0) that supports USB 
                Type-C to lightning charging for various gadgets and devices. Plus, 
                it also enables USB Type-C to USB Type-C charging input/output so that 
                you can conveniently use this powerbank to charge compatible devices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.outerContainer}>
        <div className={style.container} data-aos="fade-right">
             <div className={style.productImg}>
            <div className={style.sideImg}>
              <img id='mainImg' src={`images/power-bank-mobile-phone.jpg`} alt="" />
            </div>
          </div>
          <div className={style.productDetails}>
            <div className={style.bio}>
              <span>Fast Recharging Support</span>
              <br />
              <p>With Power Delivery (PD) 3.0, this powerbank lets you charge it via a USB
                 Type-C cable at a peak power of up to 24 W. This way, the powerbank 
                 can be quickly recharged in about 7.5 hours so that you can use it to 
                 keep your devices powered up as and when needed.</p>
            </div>
          </div>
        </div>
      </div>

      <article>
        <div className={style.contactUs}>
          <div className={style.contactHead}>
            <h1>Get in touch with us</h1>
            <p>Have any questions? We'd love to hear from you.</p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.info}>
              <div className={style.logoSection}>
                <MdLocalPhone style={{ fontSize: '30px', color:'white'}} />
              </div>
              <div className={style.detail}>
                +91-8947324983
              </div>
            </div>
            <div className={style.info}>
              <div className={style.logoSection}>
                <MdEmail style={{ fontSize: '30px', color: 'white' }} />
              </div>
              <div className={style.detail}>
                support@ishop.com
              </div>
            </div>
            <div className={style.info}>
              <div className={style.logoSection}>
                <MdLocationOn style={{ fontSize: '30px', color: 'white' }}/>
              </div>
              <div className={style.detail}>
                2nd main road,Industrial area,BTM-2,Banglore
              </div>
            </div>
           
          </div>
        </div>
      </article>

      <div className={style.signUp}>
        <div className={style.emailImg}>
      <img src={`images/email1.jpg`} alt="emailImg" />
            </div>
            <div className={style.form}>
              <div className={style.formContent}>
                <p>SIGN UP TO RECIEVE EMAIL UPDATES ON NEW PRODUCT ANNOUNCEMENTS,<br />DISCOUNTS AND MORE</p>
                <form action="">
                  <div className={style.name}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder='name' />
                  </div>
                  <div className={style.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='xyz@gmail.com'/>
                  </div>
                  <div className={style.btn}>
                <button><b>Submit</b></button>
                  </div>
                </form>
              </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage