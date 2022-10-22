import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router';
import {Provider} from 'react-redux';
import store from './shared/store'
import router from "./shared/routes";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </div>
  );
}

export default App;
