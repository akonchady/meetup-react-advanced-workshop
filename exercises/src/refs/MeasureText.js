import React from 'react'

export default class MeasureText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    debugger;
    this.setState({
      divHeight: this.innerRef.current.getBoundingClientRect().height
    })
  }

  render() {
    const { divHeight } = this.state;
    return (
      <div>
        <div ref={this.innerRef}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
        <div>Div height: {divHeight}</div>
      </div>
    )
  }
}
