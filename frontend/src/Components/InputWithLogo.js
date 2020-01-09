import React from 'react';

class InputWithLogo extends React.Component {

    constructor(props) {
        super(props);
        this.type = props.type;
        this.placeholder = props.placeholder;
        this.logo = props.logo;
    }

    render() {
        return (
            <div className="input-with-logo">
                <i className={this.logo}></i>
                <input type={this.type}  placeholder={this.placeholder} />
            </div>

        )
    }
}

export default InputWithLogo;