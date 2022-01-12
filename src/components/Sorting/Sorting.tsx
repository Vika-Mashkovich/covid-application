import React, { ReactElement } from 'react';
import '../../core/colors.scss';
import './Sorting.scss';

interface ISortingProps {
  onChange: (value: string) => void,
}

const Sorting: React.FC<ISortingProps> = ({ onChange }): ReactElement => (
  <section className='sorting-section'>
    <form className='select-form'>
      <select className='select' name='sorting' defaultValue='sorting' onChange={(e) => onChange(e.target.value)}>
        <option value='sorting'>Sorting</option>
        <option value='most-confirmed'>Most confirmed</option>
        <option value='most-recovered'>Most recovered</option>
        <option value='most-deaths'>Most deaths</option>
        <option value='most-new-confirmed'>Most new confirmed</option>
        <option value='most-new-deaths'>Most new deaths</option>
        <option value='least-confirmed'>Least confirmed</option>
        <option value='least-recovered'>Least recovered</option>
        <option value='least-deaths'>Least deaths</option>
        <option value='least-new-confirmed'>Least new confirmed</option>
        <option value='least-new-deaths'>Least new deaths</option>
      </select>
    </form>
  </section>
);

export default Sorting;
