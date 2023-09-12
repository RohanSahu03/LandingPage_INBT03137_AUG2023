import React,{useState} from 'react'
import { CgProfile } from 'react-icons/cg'
import { BiMenu } from 'react-icons/bi'
import {LuShoppingCart } from 'react-icons/lu'
import style from '../css/nav.module.css'

function Nav() {
    const [isActive, setIsActive] = useState(false)
   
    function showMenu() {
        setIsActive(current => !current)
    }
  return (
    <div>

          <section id={style.nav}>
              <article>

                  <div className={style.menu}>
                      <ol>
                          <li><a href="">
                              <img className={style.logo} src={`images/ishop.png`} alt="logo"  />
                          </a></li>
                          <li> Product</li>
                          <li>Contact</li>
                          <li>Sign up</li>
                        
                      </ol>

                  </div>

                  <div className={style.rightside}>
                     

                      <div className={style.profile}>
                          <div className={`${style.profileLogo}`} id="toggler" ><CgProfile style={{color: '#535c68'}}/> </div>              
                     </div>
                       
                      <div className={style.profile}>
                          <div className={`${style.profileLogo}`} > <LuShoppingCart style={{ color: '#535c68' }}> </LuShoppingCart></div>
                      </div>

                      <div className={style.login}>
                    
                              <div >Login</div>
                         
                      </div>
                      <div className={style.categoryIcon}>
                          <BiMenu style={{ float: 'left', marginLeft: '4px', fontSize: '25px' }} onClick={showMenu} />
                      </div>
                  </div>
                  <div className={style.showMenu} style={{
                      display: isActive ? 'block' : '' }}>
                            <ul>
                                <li>Product</li>
                                <li>Contact</li>
                                <li>Sign up</li>
                            </ul>
                  </div>

              </article>
          </section>

    </div>
  )
}

export default Nav