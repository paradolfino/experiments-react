var React = require('react');

class Popular extends React.Component {
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (<ul className="languages">
                    {languages.map(function(item, index){
                        return <li key={index}>{item}</li>;
                    })}
                </ul>);
    }
}

module.exports = Popular;