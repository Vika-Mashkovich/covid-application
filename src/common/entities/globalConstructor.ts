import { IGlobalStatistics } from '../types/statisticsTypes';

export class Global {
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  totalRecovered:number;
  date: string;

  constructor(props: IGlobalStatistics) {
    this.newConfirmed = props.newConfirmed;
    this.totalConfirmed = props.totalConfirmed;
    this.newDeaths = props.newDeaths;
    this.totalDeaths = props.totalDeaths;
    this.totalRecovered = props.totalRecovered;
    this.date = props.date;
  }
}
