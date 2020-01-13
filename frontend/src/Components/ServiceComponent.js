import React from 'react';

class ServiceComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.description = props.description;
        this.icon = props.icon;
    }

    render() {
        return (
            <div class="service-box">
                <div class="service-icon">{this.icon}</div>
                <div class="service-title">{this.title}</div>
                <div class="service-desc">{this.description}</div>
            </div>
        )
    }
}

export default ServiceComponent;