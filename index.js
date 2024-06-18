import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

const root = document.getElementById('root');
injectTapEventPlugin();
render(<App />, root);
