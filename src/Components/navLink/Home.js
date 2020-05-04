import React, { Component } from 'react'
// import App from '../App'
import HomeContent from '../Content /HomeContent'
import FooterContent from '../Content /FooterContent'
import Welcome from "./Welcome"
import './Navbar.css'
import  '../../App.css'
import Bounce from '../../Bounce'


const contentArray = ['DYNAMIC WEBSITE', 'MARKETING STRATEGIES', 'MOBILE APP EVERYONE WILL LOVE'];


class Home extends Component {
    constructor() {
        super();
        this.state = {
            textIdx : 0,
            company: "ZinoSpot.",
            country: "NG",
            Content: "WE CAN HELP YOU",
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx : currentIdx + 1})
        }, 2500);

    }

    componentWillUnmount() {
clearInterval(this.timeout);
    }



    render() {
        let textChanges = contentArray[this.state.textIdx % contentArray.length]
        return (
      <div>
          <section className="container-home">
              <h1  className="company">{this.state.company}<span className="country">{this.state.country}</span></h1>
              <h2  className="content">{this.state.Content} </h2>
              <p className="create"> CREATE BETTER <span className="swipe-name">{textChanges}</span></p>
          </section>
          <section>
          <Welcome />
           <Bounce />
           <HomeContent />
          </section>
           
       <FooterContent />
          </div>
        );
    }
}
export default Home
