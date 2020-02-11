import React from 'react';

const fotos = [
    {
        name: 'foto-1',
        url: "https://images.unsplash.com/photo-1580418600429-b930d2f2bbdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=368&q=80"
    },
    {
        name: 'foto-2',
        url: "https://images.unsplash.com/photo-1569409611407-50eee9f59dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=789&q=80"
    },
    {
        name: 'foto-3',
        url: "https://images.unsplash.com/photo-1572627614330-fb84a9d40556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
    }
]

class CarrouselObject extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }
        return (
         <>
         <div className="App">
         <slider {...settings}>
            (fotos.map(fotos) => {
                return (
                    <div>
                        <img width="100%" src={fotos.url}/>
                    </div>
                );
            })
         </slider>
         </div>
         </>   
        );
    }
}

export default CarrouselObject;