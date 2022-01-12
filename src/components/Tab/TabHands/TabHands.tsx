import React, { ReactElement } from 'react';
import '../../../core/colors.scss';
import './TabHands.scss';

const TabHands: React.FC = (): ReactElement => (
  <>
    <p className='text'>
      Practicing good hygiene is an important habit that helps prevent the spread of COVID-19.
      Make these recommendations part of your routine:
    </p>
    <ul className='tab-hands-list'>
      <li>
        <span className='text'>Wash your hands often with soap and water for at least 20 seconds,
          especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.
        </span>
      </li>
      <li>
        <span className='text'>
          If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol.
          Cover all surfaces of your hands with the sanitizer and rub them together until they feel dry.
        </span>
      </li>
      <li>
        <span className='text'>
          Avoid touching your eyes, nose, and mouth with unwashed hands.
        </span>
      </li>
    </ul>
  </>
);

export default TabHands;
