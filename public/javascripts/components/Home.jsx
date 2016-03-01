import React from 'react';
import Slider from 'react-slick';
import '../../stylesheets/home.scss';

export default class Home extends React.Component {
  render() {
    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 7500,
      className: 'home-carousel'
    };
    return (
      <div className='home'>
        <div className='content-row carousel-row'>
          <Slider {...sliderSettings}>
            <img src='../../images/salon_inside_1.jpg'></img>
            <img src='../../images/salon_inside_2.jpg'></img>
            <img src='../../images/salon_inside_3.jpg'></img>
          </Slider>
        </div>
        <div className='content-row description-row'>
          <div className='text description'>Aurora's Barber and Beauty Shop is a full fledged hair and nail salon featuring a master barber, and diverse team to give you the best salon experience!</div>
        </div>
      </div>
    );
  }
}
