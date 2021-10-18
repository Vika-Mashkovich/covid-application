import { IFlag } from '../types/flagsTypes';

export class Flag {
  countryCode:string;
  flag:string;

  constructor(props: IFlag) {
    this.countryCode = props.countryCode;
    this.flag = props.flag;
  }
}
