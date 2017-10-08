import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = Reactotron; // eslint-disable-line

export default Reactotron;
