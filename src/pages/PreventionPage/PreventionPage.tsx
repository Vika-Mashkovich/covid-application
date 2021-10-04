import React, { ReactElement } from 'react';
import Icon from '../../components/Icon/Icon';
import './PreventionPage.scss';

const PreventionPage:React.FC = ():ReactElement => (
  <main className='wrapper-prevention'>
    <div className='container'>
      <h1 className='heading-h1'>Prevention</h1>
      <p className='text prevention-text'>Protect yourself and others around you by knowing the facts and taking appropriate precautions.
        Floow advice provided by your local health authority.
      </p>
      <div className='prevention'>
        <div className='prevention-block'>
          <Icon type='mask' className='prevention-img' />
          <h2 className='heading-h2'>Wear a mask</h2>
          <p className='text'>Masks can help prevent the spread of the virus from the person wearing the mask to others.</p>
          <button className='btn prevention-btn'>More details</button>
        </div>
        <div className='prevention-block'>
          <Icon type='hands' className='prevention-img' />
          <h2 className='heading-h2'>Wash your hands often</h2>
          <p className='text'>Clean your hands with soop and water, or alcohol-based hand sanitizer.</p>
          <button className='btn'>More details</button>
        </div>
        <div className='prevention-block'>
          <Icon type='distancing' className='prevention-img' />
          <h2 className='heading-h2'>Physical distancing</h2>
          <p className='text'>Maintain a safe distance especially from anyone who is coughinf or sneezing.</p>
          <button className='btn'>More details</button>
        </div>
      </div>
    </div>
  </main>
);

export default PreventionPage;
