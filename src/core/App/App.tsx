import { useEffect, useState } from 'react';
import './App.css';
import CurrencyApi from '../../api/currencyApi/provider';
import { ICurrency } from '../../common/entities/currencyConstructor';

const App = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    CurrencyApi.getCurrency()
      .then(setCurrencyData);
  }, []);

  let listOfCurrencies: Array<any> = [];

  if (currencyData) {
    listOfCurrencies = currencyData.map((item: ICurrency) => (
      <div key={item.sapId} className='item-currency'>
        <span>{item.usdIn}</span>
        <span>{item.usdOut}</span>
        <span>{item.eurIn}</span>
        <span>{item.eurOut}</span>
        <span>{item.street}</span>
        <span>{item.city}</span>
      </div>
    ));
  }

  return (
    <>
      <nav>
        <ul>
          <li>Список подразделений</li>
          <li>Подразделения на карте</li>
        </ul>
      </nav>
      <div className='App-main'>
        {listOfCurrencies}
      </div>
    </>
  );
};

export default App;
