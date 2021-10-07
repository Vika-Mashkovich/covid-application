import React, { ReactElement, useState } from 'react';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import TabDistancing from '../../components/Tab/TabDistancing/TabDistancing';
import TabHands from '../../components/Tab/TabHands/TabHands';
import TabMask from '../../components/Tab/TabMask/TabMask';
import './PreventionPage.scss';

const PreventionPage:React.FC = ():ReactElement => {
  const [tabState, setTabState] = useState<string>('mask');

  const changeTab = (label:string) => {
    setTabState(label);
  };

  return (
    <main className='wrapper-prevention'>
      <div className='container'>
        <h1 className='heading-h1'>Prevention</h1>
        <p className='text prevention-text'>Protect yourself and others around you by knowing the facts and taking appropriate precautions.
          Floow advice provided by your local health authority.
        </p>
        <div className='prevention'>
          <div className={tabState === 'mask' ? 'prevention-block prevention-block-active' : 'prevention-block'}>
            <Icon type='mask' className='prevention-img' />
            <h2 className='heading-h2'>Wear a mask</h2>
            <p className='text'>Masks can help prevent the spread of the virus from the person wearing the mask to others.</p>
            {tabState !== 'mask' && <Button className='btn' onClick={async () => changeTab('mask')}>More details</Button>}
          </div>
          <div className={tabState === 'hands' ? 'prevention-block prevention-block-active' : 'prevention-block'}>
            <Icon type='hands' className='prevention-img' />
            <h2 className='heading-h2'>Wash your hands often</h2>
            <p className='text'>Clean your hands with soop and water, or alcohol-based hand sanitizer.</p>
            {tabState !== 'hands' && <Button className='btn' onClick={async () => changeTab('hands')}>More details</Button>}
          </div>
          <div className={tabState === 'distancing' ? 'prevention-block prevention-block-active' : 'prevention-block'}>
            <Icon type='distancing' className='prevention-img' />
            <h2 className='heading-h2'>Physical distancing</h2>
            <p className='text'>Maintain a safe distance especially from anyone who is coughinf or sneezing.</p>
            {tabState !== 'distancing' && <Button className='btn' onClick={async () => changeTab('distancing')}>More details</Button>}
          </div>
        </div>
        <Icon type='coronaGreenBig' className='prevention-corona-green' />
        <div className='prevention-info-block'>
          {tabState === 'mask' && <TabMask />}
          {tabState === 'hands' && <TabHands />}
          {tabState === 'distancing' && <TabDistancing />}
        </div>
      </div>
    </main>
  );
};

export default PreventionPage;
