import { ICurrencyData } from '../types/currencyTypes';

export class Currency {
  сountry: string;
  totalConfirmed: number;

  constructor(props: ICurrencyData) {
    this.сountry = props.сountry;
    this.totalConfirmed = props.totalConfirmed;
  }
}
