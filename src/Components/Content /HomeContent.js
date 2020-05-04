import React, { Component } from 'react'
import '../../App.css'
import Team from '../Images/Team.jpg'

export class HomeContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            help: "WE CAN HELP YOU",
            business: "GROW YOUR BUSINESS",
            empower: "ENPOWERMENT",
            achieve:"ACHIEVEMENT",
            response: "RESPONDED",
            assign: "ASSIGNMENT"
             
        }
    }
    
    render() {
        return (
            <section>
            {/* <Service /> */}
            <div id="Service" className="Service">
      <h1 className="Context">{this.state.help}</h1>
      <h1 className="business">{this.state.business}</h1>
  </div>
  <div>
      <h3 className="Empower">
          {this.state.empower}
          <h3 className="resource">Getting resourceful in unfamiliar place </h3>
          <p className="source">Sourcing talent from unfamiliar geographies is really hard to do, especially where you don’t have a strong brand. Your time should be spent focusing on your customer and product, not recruiting tech talent across the globe. At Zinospot, we can help you accomplish your goals and also work with your (budget) to satisfy our client and grow internet economies. </p>
   <p className="Group"></p>
      </h3>
      <h2 className="Achieve">{this.state.achieve}</h2>
      <h2 className="Ensure">Ensuring a positive feedback</h2>
      <h5 className="Heading">
      Zinospot we match your team and project needs with experience and high soft developers in other to work together with any of your team and compinies.
      <img src={Team} alt="team"  className="Team-pix"/>
      </h5> 

      <div className="Team">
      <h2 className="response">{this.state.response}</h2>
      <h2 className="instant">Instant distrubuted team</h2>
      <h5 className="team">
      when Zinospot Developers join your team. they operate as full-time and long-terms employees and aslo stay connected with your team and companies anywhere they are in the world
      </h5>
      </div>
      <p className="smartwork"></p>
     
  
      <p className="conference"></p>
      <h2 className="assign">{this.state.assign}</h2>
      <h3 className="talent">Accessing talents you need</h3>
      <p className="probs">Problem-solving and ability to pass knowleage globally. increasing the growth of your bussiness with the help of Zinospot creativities ideas.</p>
  </div>
        </section>

        )
    }
}

export default HomeContent;
