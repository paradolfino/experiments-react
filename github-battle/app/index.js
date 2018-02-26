var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is NOT your friend*/}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));