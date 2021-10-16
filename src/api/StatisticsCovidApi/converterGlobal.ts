import { IConverterGlobal, IGlobalStatistics } from '../../common/types/statisticsTypes';

export const converterGlobal = (global: IConverterGlobal):IGlobalStatistics => (
  {
    newConfirmed: global.NewConfirmed,
    totalConfirmed: global.TotalConfirmed,
    newDeaths: global.NewDeaths,
    totalDeaths: global.TotalDeaths,
    totalRecovered: global.TotalConfirmed - global.TotalDeaths,
    date: global.Date,
  }
);
