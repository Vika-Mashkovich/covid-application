import { useEffect, useState } from 'react';
import './App.css';
import CurrencyApi from '../../api/currencyApi/provider';
import { ICurrencyData } from '../../common/types/currencyTypes';

const App = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    CurrencyApi.getCurrency()
      .then(setCurrencyData);
  }, []);

  let listOfCurrencies: Array<any> = [];

  if (currencyData) {
    listOfCurrencies = currencyData.map((item: ICurrencyData) => (
      <div key={item.сountry} className='item-currency'>
        <span>{item.сountry}</span>
        <span>{item.totalConfirmed}</span>
      </div>
    ));
  }

  return (
    <>
      <div>Диплом коронавирусный</div>
      {listOfCurrencies}
    </>
  );
};

export default App;
