import React from 'react';

class ButtonRadious extends React.PureComponent {
    constructor(props){
        super(props);
        this.text = props.text;
        this.type = props.type;
    }

    render(){
        return(
            <button type={this.type} className="btn-radious" >{this.text}</button>
        )
    }
}

export default ButtonRadious;