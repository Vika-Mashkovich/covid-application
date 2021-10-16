import { ICountryStatistics } from '../types/statisticsTypes';

export class Country {
  id?:string;
  country: string;
  countryCode?:string;
  newConfirmed:number;
  totalConfirmed: number;
  newDeaths:number;
  totalDeaths:number;
  totalRecovered:number;
  flag:string;

  constructor(props: ICountryStatistics) {
    this.id = props.id;
    this.country = props.country;
    this.countryCode = props.countryCode;
    this.newConfirmed = props.newConfirmed;
    this.totalConfirmed = props.totalConfirmed;
    this.newDeaths = props.newDeaths;
    this.totalDeaths = props.totalDeaths;
    this.totalRecovered = props.totalRecovered;
    this.flag = props.flag;
  }
}
