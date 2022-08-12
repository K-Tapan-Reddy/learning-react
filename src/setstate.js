import react from "react";

class Dummy extends Component {
  state = {
    count: 0,
  };
  render() {
    return this.setState({ count: this.state.count + 1 });
  }
}

export default Dummy;
