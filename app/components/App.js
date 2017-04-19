var React = require('react');

// This is how you make an ES6 component
class Header extends React.Component {
  render(){
    return (
      <h1>This is a header</h1>
      )
  }
}

class NavBar extends React.Component{
  render(){
    return (
      <ul>
        <li>Home </li>
        <li>About</li>
        <li>Surfing</li>
        <li>Hikeing</li>
      </ul>
      )
  }
}

module.exports = React.createClass({
  render: function() {
    return (
      <div className="helloContainer">
          {/*This is how you nest the header component*/}
          <Header />
          <NavBar />
          <h1 className="hello">Hello React</h1>
          <h2>TWO plus TWO equals {2+2}</h2>
      </div>
    )
  }
});

