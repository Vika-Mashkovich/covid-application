import React, { ReactElement } from 'react';
import Icon from '../../components/Icon/Icon';
import './SymptomsPage.scss';

const SymptomsPage:React.FC = ():ReactElement => (
  <main className='wrapper-symptoms'>
    <div className='container'>
      <h1 className='heading-h1'>Symptoms</h1>
      <p className='text'>
        COVID-19 affects different people in different ways.
        Most infected people will develop mild to moderate illness and recover without hospitalization.
      </p>
      <Icon type='symptoms' className='symptoms-img' />
      <Icon type='coronaGreenBig' className='corona-green' />
      <div className='symptoms'>
        <Icon type='coronaGreenBig' className='corona-green-big' />
        <Icon type='coronaGrayBig' className='corona-gray-big' />
        <div className='symptoms-block'>
          <h2 className='heading-h2'>Serious symptoms</h2>
          <ul className='symptoms-list'>
            <li><span>difficulty breathing or shortness of breath</span></li>
            <li><span>loss of speech or mobility, or confusion</span></li>
            <li><span>chest pain</span></li>
          </ul>
        </div>
        <div className='symptoms-block'>
          <h2 className='heading-h2'>Most common symptoms</h2>
          <ul className='symptoms-list'>
            <li><span>fever</span></li>
            <li><span>cough</span></li>
            <li><span>tiredness</span></li>
            <li><span>loss of taste or smell</span></li>
          </ul>
        </div>
        <div className='symptoms-block'>
          <h2 className='heading-h2'>Less common symptoms</h2>
          <ul className='symptoms-list'>
            <li><span>sore throat</span></li>
            <li><span>headache</span></li>
            <li><span>aches and pains</span></li>
            <li><span>diarrhea</span></li>
            <li><span>a rash on skin, or discolouration of fingers or toes</span></li>
            <li><span>red or irritated eyes</span></li>
          </ul>
        </div>
      </div>
      <div className='attention-block'>
        <Icon type='attention' className='attention-img' />
        <p className='text-attention'>
          Seek immediate medical attention if you have serious symptoms.
          Always call before visiting your doctor or health facility.
        </p>
      </div>
      <div className='info-block'>
        <p className='text-info'>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
        <p className='text-info'>
          On average it takes 5–6 days from when someone is infected with the virus for symptoms to show,
          however it can take up to 14 days.
        </p>
      </div>
    </div>
  </main>
);

export default SymptomsPage;
