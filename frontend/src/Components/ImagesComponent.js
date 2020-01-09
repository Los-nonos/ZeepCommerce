import React from 'react';

class ImagesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.images = props.images;

        this.state = {
            images: null
        }
    }

    componentDidMount() {
        const array = this.images.map((item, index) => {

            if (!item.text) {
                return (
                    <li className="mdc-image-list__item">
                        <img className="mdc-image-list__image" src={item.path} />
                    </li>)
            }
            else {
                return (
                    <li className="mdc-image-list__item">
                        <img className="mdc-image-list__image" src={item.path} />
                        <div className="mdc-image-list__supporting">
                            <span className="mdc-image-list__label">{item.text}</span>
                        </div>
                    </li>)
            }
        });

        this.setState({ images: array });
    }

    render() {
        return (
            <div className="images-component">
                <ul className="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
                    {this.state.images}
                </ul>
            </div>
        );
    }
}

export default ImagesComponent;