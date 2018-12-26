import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img alt={this.props.name} src={this.props.imgUrl} width="150" />
      </div>
    );
  }
}

PlanetItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};
