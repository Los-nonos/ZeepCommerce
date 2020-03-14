import { Grid } from '@material-ui/core';
import { Component} from 'react';

class GridContainer extends
Component<any, any> {
    render() {
        const props = this.props;
        return (
            <Grid container={true}
            {...props}></Grid>
        );
    }
}

export default GridContainer;