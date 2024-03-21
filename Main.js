import React from 'react'
import { Fragment } from 'react'
import logo from "../../logo.svg"
const Main = () => {
  return (
    <Fragment>
        <div className='content-left'>
            <div className='content-left1'> 
                <img src={logo} alt='logo' height="40px" width="40px"></img>
                <h2 style={{fontFamily:"Yeseva One", marginBottom:"0"}}>HOANG THANH TUNG</h2>
                <p>FullStack Dev</p>
            </div>


            <div className='content-left2'>
                <ul style={{listStyleType:"None"}}>
                    <li style={{marginTop:"5%"}}>
                        <img src={logo} alt='logo_contract1' height="20px" width="20px"></img>
                    </li>
                    <li style={{marginTop:"5%"}}>
                        <img src={logo} alt='logo_contract2' height="20px" width="20px"></img>
                    </li>
                    <li style={{marginTop:"5%"}}>
                        <img src={logo} alt='logo_contract3' height="20px" width="20px"></img>
                    </li>
                    <li style={{marginTop:"5%"}}>
                        <img src={logo} alt='logo_contract4' height="20px" width="20px"></img>
                    </li>
                </ul>
            </div>
            

            <div className='content-left3'>
                <div className='content-left3-child'>
                    <div>
                        <img src={logo} alt='contact-icon' height="30px" width="30px"></img>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>01228328929</p>
                    </div>
                </div>

                <div className='content-left3-child'>
                    <div>
                        <img src={logo} alt='contact-icon' height="30px" width="30px"></img>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>tungtrungtk@gmail.com</p>
                    </div>
                </div>

                <div className='content-left3-child'>
                    <div>
                        <img src={logo} alt='contact-icon' height="30px" width="30px"></img>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Japan</p>
                    </div>
                </div>

                <div className='content-left3-child'>
                    <button type='submit'>
                        <img src={logo} alt='contact-icon' height="20px" width="20px"></img>
                        <span style={{fontFamily:"Montaga"}}>Downnload Resume</span>
                     </button>
                </div>
            </div>

        </div>

        {/*content-left end */}

        <div className='content-right'>
            <div>
                <h3>About Me</h3>
                <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</p>
            </div>

            <div>
                <h4> What I Do</h4>
                <div>
                    <div className='ido1'>
                        <h4>
                            <img src={logo} alt='contact-icon' height="20px" width="20px"></img>
                            RPA
                        </h4>
                        <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</p>   
                    </div>
                     
                    <div className='ido2'>
                        <h4>
                            <img src={logo} alt='contact-icon' height="20px" width="20px"></img>
                            Web
                        </h4>
                        <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</p>  
                    </div>

                    <div className='ido3'>
                        <h4>
                            <img src={logo} alt='contact-icon' height="20px" width="20px"></img>
                            App
                        </h4>
                        <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</p>  
                    </div>

                    <div className='ido4'>
                        <h4>
                            <img src={logo} alt='contact-icon' height="20px" width="20px"></img>
                            Mobile
                        </h4>
                        <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</p>  
                    </div>
                </div>
            </div>   

        </div>
    </Fragment>
  )
}

export default Main