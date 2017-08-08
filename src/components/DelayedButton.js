// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  constructor(props) {
    super(props)
    this.props = {delay: props.delay}

  }



  delayClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  iReallyHateThisLab = () => {
    this.props.onDelayedClick(event)
  }

  render () {
    return (
    <button onClick={this.delayClick} value="Delayed Click" />
    )
  }
}

export default DelayedButton
