var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    constructor(){

    }
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));