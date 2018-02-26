var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        var friends = this.props.users.filter((user) => {
            return user.friend == true
        }).map((user) =>{
            return <li>{user}</li>
        });

        var nonfriends = this.props.users.filter((user) => {
            return user.friend != true
        }).map((user) =>{
            return <li>{user}</li>
        });
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App users={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />, document.getElementById("app"));