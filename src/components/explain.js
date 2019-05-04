import React, { Component } from 'react';


class Explain extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.attachRef = target => this.setState({ target });
      this.state = { show: false };
    }
  
    render() {
      const { show, target } = this.state;
      return (
        <>
          <Button
            ref={this.attachRef}
            onClick={() => this.setState({ show: !show })}
          >
            Click me!
          </Button>
          <Overlay target={target} show={show} placement="right">
            {props => (
              <Tooltip id="overlay-example" {...props}>
                My Tooltip
              </Tooltip>
            )}
          </Overlay>
        </>
      );
    }
  }
  
export default Explain;
