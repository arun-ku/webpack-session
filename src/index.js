import React from 'react';
import { render } from 'react-dom';
import {
    Home,
    App,
} from './Components';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

const elem = document.getElementById('app');
    
render(<App /> , elem);