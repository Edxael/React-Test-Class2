import React, { Component } from 'react'

export default class Math1 extends Component {
  state = { input1: "", answer: 0, show: false }

  AddNumber = () => {
    let num1 = parseInt(this.state.input1)
    num1 = num1 * 2
    console.log(num1)

    this.setState({ answer: num1 })
    this.setState({ show: true })
    setTimeout(()=>{ this.setState({ show: false, input1: "" }) }, 4000)
  }


  render() {
    return(
    <div>
      <input type="text" value={this.state.input1} placeholder= "Put Number..."
                       onChange={(eve)=>{this.setState( { input1: eve.target.value })}} />

      <button onClick={ this.AddNumber }>Do Math</button>
      { this.state.show ? <div>{ this.state.answer }</div> : <div>Answer goes Here</div> }
    </div>
    )
  }
}
