var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
    render() {
        return(
            <div>
                <img
                    src={this.props.img}
                    alt="Avatar"
                    style={{width: 100, height: 100}}
                />
                <h1>Name: {this.props.name}</h1>
                <h3>Username: {this.props.username}</h3>
            </div>
        )
    }
}

ReactDOM.render(<Badge
        img="http://via.placeholder.com/150x150.png"
        name="viktharien"
        username="viktharien"
    />, document.getElementById("app"));