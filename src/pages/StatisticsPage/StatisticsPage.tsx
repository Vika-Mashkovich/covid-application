import React, { ReactElement, useState } from 'react';
import CountriesList from '../../components/CountriesList/CountriesList';
import GlobalItem from '../../components/GlobalItem/GlobalItem';
import Icon from '../../components/Icon/Icon';
import Search from '../../components/Search/Search';
import Sorting from '../../components/Sorting/Sorting';
import Map from '../../components/Map/Map';
import './StatisticsPage.scss';

const StatisticsPage:React.FC = ():ReactElement => {
  const [valueSelected, setValueSelected] = useState<string>('');

  return (
    <main className='wrapper-statistics'>
      <div className='container'>
        <h1 className='heading-h1'>Statistics</h1>
        <GlobalItem />
        <Search />
        <Sorting onChange={(value:string) => { setValueSelected(value); }} />
        <CountriesList sortingValue={valueSelected} />
        <Icon type='coronaGreenBig' className='page-coronaGreenBig' />
        <Map />
      </div>
    </main>
  );
};

export default StatisticsPage;
