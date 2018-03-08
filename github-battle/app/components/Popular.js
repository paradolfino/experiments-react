var React = require('react');

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(()=>{
            return {
                selectedLanguage: lang
            }
        });
        console.log(this.state.selectedLanguage);
    }
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (<ul className="languages">
                    {languages.map((lang)=>{
                        return <li key={lang} onClick={this.updateLanguage}>{lang}</li>;
                    },this)}
                </ul>);
    }
}

module.exports = Popular;