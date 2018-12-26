import Head from 'next/head';
import { Provider } from 'react-redux';
import planetStore from '../store/planetStore';
import PlanetAppContainer from '../containers/PlanetApp';

export default () => (
  <div>
    <Head>
      <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
    </Head>

    <Provider store={planetStore}>
      <PlanetAppContainer />
    </Provider>
  </div>
);
