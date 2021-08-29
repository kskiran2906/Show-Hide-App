import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="container">
            <div className="inner-container">
              <button type="button" className="btn" onClick={this.onFirstName}>
                Show/Hide Firstname
              </button>
              {firstName ? <p className="paragraph">Joe</p> : null}
            </div>
            <div className="inner-container">
              <button type="button" className="btn" onClick={this.onLastName}>
                Show/Hide Lastname
              </button>
              {lastName ? <p className="paragraph">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
