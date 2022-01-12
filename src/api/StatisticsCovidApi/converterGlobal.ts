import { Global } from '../../common/entities/globalConstructor';
import { IConverterGlobal } from '../../common/types/statisticsTypes';

export const converterGlobal = (global: IConverterGlobal):Global => (
  new Global({
    newConfirmed: global.NewConfirmed,
    totalConfirmed: global.TotalConfirmed,
    newDeaths: global.NewDeaths,
    totalDeaths: global.TotalDeaths,
    totalRecovered: global.TotalConfirmed - global.TotalDeaths,
    date: global.Date,
  })
);
