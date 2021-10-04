import { ICountryStatistics } from '../types/statisticsTypes';

export class Country {
  сountry: string;
  totalConfirmed: number;

  constructor(props: ICountryStatistics) {
    this.сountry = props.сountry;
    this.totalConfirmed = props.totalConfirmed;
  }
}
