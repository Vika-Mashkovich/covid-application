import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomePage from '../../pages/HomePage/HomePage';
import PreventionPage from '../../pages/PreventionPage/PreventionPage';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import SymptomsPage from '../../pages/SymptomsPage/SymptomsPage';
import NoPage from '../../pages/NoPage/NoPage';
import '../colors.scss';
import './App.scss';

const App: React.FC = (): ReactElement => (
  <>
    <Header />
    <Switch>
      <Route component={HomePage} path='/' exact />
      <Route component={StatisticsPage} path='/statistics' />
      <Route component={PreventionPage} path='/prevention' />
      <Route component={SymptomsPage} path='/symptoms' />
      <Route component={NoPage} path='*' />
    </Switch>
    <Footer />
  </>
);

export default App;
