import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App1 from './app.jsx'

class IndexComp extends Component {
  render() {
    return(
    <div>
      <App1/>
    </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
