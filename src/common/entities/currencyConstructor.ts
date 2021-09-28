export interface ICurrency {
  usdIn: string;
  usdOut: string;
  eurIn: string;
  eurOut: string;
  street: string;
  city: string;
  sapId: string;
}

export class Currency {
  usdIn: string;
  usdOut: string;
  eurIn: string;
  eurOut: string;
  street: string;
  city: string;
  sapId: string;

  constructor(props: ICurrency) {
    this.usdIn = props.usdIn;
    this.usdOut = props.usdOut;
    this.eurIn = props.eurIn;
    this.eurOut = props.eurOut;
    this.street = props.street;
    this.city = props.city;
    this.sapId = props.sapId;
  }
}
