
const Comp = React.createClass({
  componentWillMount() {
    console.log("I mounted");
  },
  render() {
    return <h1>Hi {this.props.name}</h1>
  }
})

const elem = React.createElement(Comp, {name: "ricky"})

console.log(elem["$$typeof"])

ReactDOM.render(elem, document.getElementById("root"))