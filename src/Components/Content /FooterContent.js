import React, { Component } from 'react'

export default class FooterContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
           <React.Fragment>
               <div className="footer-container">
                   <footer className="footer">
                        <h3 className="footer-company">Company
                        <hr className="line"/></h3>
                        
                        <div className="footer-Location">Location
                        <hr className="lineIdx"/>
                            <ul className="Location">
                            <li>Nigeria </li>
                            <li>Estonia</li>
                            <li>India</li>
                            </ul>
                        </div>
                       
                        <div className="footer-Jobs">We Are
                        <hr className="lineIn"/> 
                        <ul className="weAre ">
                        <li>Web Developers</li>
                        <li> App Developers</li>
                        <li>Software Engineers</li>
                        <li>Digtal marketers</li>
                        <li>UI/UX Designers</li>
                        </ul>
                        </div>
                   </footer>
               </div>
           </React.Fragment>
        )
    }
}
