import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';

interface ILauncher {
  children: React.ReactNode,
}

const Launcher:React.FC<ILauncher> = ({ children }):ReactElement => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);

export default Launcher;
