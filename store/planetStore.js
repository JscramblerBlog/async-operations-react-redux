import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';


const logger = createLogger();

const planetStore = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);

export default planetStore;
