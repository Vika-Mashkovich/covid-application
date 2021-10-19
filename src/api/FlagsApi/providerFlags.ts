import { Flag } from '../../common/entities/flagConstructor';
import flagsData from '../MOCK/flagsData/flags.json';
import { converterFlags } from './converterFlags';

export const getFlags = ():Promise<Flag[]> => Promise.resolve()
  .then(() => flagsData)
  .then((data) => converterFlags(data));
