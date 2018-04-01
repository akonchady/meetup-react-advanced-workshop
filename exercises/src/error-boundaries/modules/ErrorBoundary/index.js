import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    this.setState({
      hasError: true
    });
  }

  reloadPage = () => {
    window.location.reload();
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          Something went wrong!!!
          <button onClick={this.reloadPage}>Reload</button>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;