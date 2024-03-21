import React from 'react'
import logo from "../../logo.svg"

const Navigation = () => {
  return (
    <div className="navigation_bar_content">
          <div style={{ display: "hidden" }}>
            </div>
            <div>
              <ul style={{ listStyleType: "None" }}>
                  <li>
                      <img src={logo} alt="logo" height="30px" width="30px"></img>
                      <span>Home</span>
                  </li>
                  <li>
                      <img src={logo} alt="logo" height="30px" width="30px"></img>
                      <span>Resume</span>
                  </li>
                  <li>
                      <img src={logo} alt="logo" height="30px" width="30px"></img>
                      <span>Work</span>
                  </li>
                  <li>
                      <img src={logo} alt="logo" height="30px" width="30px"></img>
                      <span>Contact</span>
                  </li>
              </ul>
            </div>
    </div>
  )
}

export default Navigation