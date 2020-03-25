import { Component } from 'react';
import Button from '@material-ui/core/Button';

class Buttom extends Component<any, any> {
    render() {
        const {content} = this.props;
        return (
            <Button variant="contained" color='primary'>
                {content}
            </Button>
        )
    }
}

export default Buttom;