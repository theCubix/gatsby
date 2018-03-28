import React from "react";

class Img extends React.Component {
  render () {
    return (
      <div>
        <img style={{ maxWidth: '100%' }} src={ this.props.src } alt={ this.props.alt }/>
      </div>
    )
  }
}

export default Img