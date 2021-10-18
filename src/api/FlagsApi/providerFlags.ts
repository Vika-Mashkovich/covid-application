import { Flag } from '../../common/entities/flagConstructor';
import { IFlag } from '../../common/types/flagsTypes';
import flagsData from '../MOCK/flagsData/flags.json';
// import { converterFlags } from './converterFlags';

export const getFlags = ():Flag[] => {
  const result:IFlag[] = [];

  Promise.resolve()
    .then(() => flagsData)
    .then((data) => {
      console.log(data);
      // result = converterFlags(data);
    });

  return result;
};
