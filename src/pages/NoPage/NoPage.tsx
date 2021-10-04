import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import './NoPage.scss';

const NoPage:React.FC = ():ReactElement => {
  const history = useHistory();

  return (
    <main className='wrapper-nopage'>
      <div className='container'>
        <span className='nopage-text'>Page not found</span>
        <Button className='btn nopage-btn' onClick={async () => history.push('/home')}>Return to Home page</Button>
      </div>
    </main>
  );
};

export default NoPage;
