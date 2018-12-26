import { connect } from 'react-redux';
import PlanetAction from '../actions/PlanetAction';
import PlanetList from '../components/PlanetList';

const mapStateToProps = (state) => (
  {
    planets: state.planets
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchPlanets: () => dispatch(PlanetAction.fetchPlanets())
  }
);

const PlanetAppContainer = connect(
  mapStateToProps, mapDispatchToProps)(PlanetList);

export default PlanetAppContainer;
