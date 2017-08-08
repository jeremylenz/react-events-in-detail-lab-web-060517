// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props)

  }



  iHateThisLab = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (

    <button onClick={this.iHateThisLab} value="coordinates" />
    )
  }


}

export default CoordinatesButton
