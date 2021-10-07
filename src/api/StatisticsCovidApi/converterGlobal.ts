import { IConverterGlobal } from '../../common/types/statisticsTypes';

export const converterGlobal = (global: IConverterGlobal):object => (
  {
    newConfirmed: global.NewConfirmed,
    totalConfirmed: global.TotalConfirmed,
    newDeaths: global.NewDeaths,
    totalDeaths: global.TotalDeaths,
    date: global.Date,
  }
);
