import { RECEIVE_PLANETS, REQUEST_PLANETS } from '../constants';

const INITIAL_STATE = [];

const planets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return INITIAL_STATE;

    case RECEIVE_PLANETS:
      return action.planets;

    default:
      return state;
  }
};

export default planets;
