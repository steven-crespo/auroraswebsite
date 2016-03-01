import React from 'react';
import '../../stylesheets/service_category.scss';

export default class ServiceCategory extends React.Component {
  static propTypes = {
    services: React.PropTypes.array,
    category: React.PropTypes.string,
  };
  render() {
    let services = [];

    for (let service of this.props.services) {
      services.push(
        <div className='service' key={service.name}>
          <div className='service-name'>{service.name}</div>
          <div className='dots'></div>
          <div className='service-price'>${service.price + (service.extra ? ' +' : '')}</div>
        </div>
      );
    }

    return (
      <div className='category'>
        <div className='category-title'>{this.props.category}</div>
        <div className='services-container'>
          {services}
        </div>
      </div>
    );
  }
}
