import React from 'react';

class ErrorComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.ErrorCode = props.errorCode;
    }

    render() {
        return (
            <div class="container-error">
                <h2>Oops! Page not found.</h2>
                <h1>{this.ErrorCode}</h1>
                <p>We can't find the page you're looking for.</p>
                <a href="/">Go back home</a>
            </div>
        )
    }
}

export default ErrorComponent;