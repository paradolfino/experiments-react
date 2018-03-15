var React = require('react');
var PropTypes = require('prop-types');

function SelectedLanguage(props) {
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
        <ul className="languages">
                    {languages.map((lang)=>{
                        return (
                        <li 
                            style={lang === props.selectedLanguage ? { color: 'red' } : null}
                            key={lang} 
                            onClick={props.onSelect.bind(null, lang)}>
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
        
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}/>
            </div>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

module.exports = Popular;