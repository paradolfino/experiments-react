var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
    render() {
        return (
        <ul className="languages">
                    {languages.map((lang)=>{
                        return (
                        <li 
                            style={lang === this.props.selectedLanguage ? { color: 'red' } : null}
                            key={lang} 
                            onClick={this.props.onSelect.bind(null, lang)}>
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
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage
                    onSelect={this.updateLanguage}
                }/>
            </div>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

module.exports = Popular;