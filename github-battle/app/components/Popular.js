var React = require('react');

class SelectLanguage extends React.Component {
    render() {
        return (<ul className="languages">
                    {languages.map((lang)=>{
                        return (
                        <li 
                            style={lang === this.state.selectedLanguage ? { color: 'red' } : null}
                            key={lang} 
                            onClick={this.updateLanguage.bind(null, lang)}>
                            {lang}
                        </li>
                    );
                    })}
                </ul>);
    }
}

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
        return null;
    }
}

module.exports = Popular;