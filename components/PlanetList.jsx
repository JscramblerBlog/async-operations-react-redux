import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlanetItem from './PlanetItem';

export default class PlanetApp extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    let planetList;

    if (this.props.planets == null) {
      planetList = (<p>Unable to retrieve planet list.</p>);
    }

    else if (this.props.planets.length == 0) {
      planetList = (<p>Loading planet data.</p>);
    }

    else {
      planetList = this.props.planets.map((planet) => (
        <PlanetItem key={planet.id}
          name={planet.name}
          imgUrl={planet.imgUrl} />
      ));
    }

    return (
      <div>
        <h2>The Planets</h2>
        {planetList}
      </div>
    );
  }
}

PlanetApp.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  })),
  fetchPlanets: PropTypes.func.isRequired
};
