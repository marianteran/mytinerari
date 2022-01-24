import React from 'react'
import Imagen from './Imagen'


export default class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTurnedOn: false,
      count: 0
    }
  }

  switchLight = () => {
    this.setState({
      isTurnedOn: !this.state.isTurnedOn,
      count: this.state.count +1,
    })
  }

  

  render() {
   

    return (
      <div>
        <p>You clicked {this.state.count}</p>
        <Imagen like={this.state.isTurnedOn} props={this.props} />
        <button onClick={this.switchLight}>switch</button>

        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>

        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Click me
        </button>


      </div>
    )
  }
}