import React, { Component } from 'react'



}
class Checker extends Component {
    constructor(props){
        super(props)
        this.state = { checked: false}
    }
    

    handleChange = (event)=> {
        this.setState({checked: event.target.checked})
    }
  render() {
    return (
      <>
      
      </>
    )
  }
}

export default Checker
