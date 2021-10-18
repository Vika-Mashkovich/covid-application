import { Flag } from '../../common/entities/flagConstructor';
import { IConverterFlags, IFlag } from '../../common/types/flagsTypes';

export const converterFlags = (flagsData: IConverterFlags[]):IFlag[] => (
  flagsData.reduce((acc:IFlag[], flagItem) => {
    acc.push(new Flag({
      countryCode: flagItem.CountryCode,
      flag: flagItem.flagBase64,
    }));

    return acc;
  }, []));
