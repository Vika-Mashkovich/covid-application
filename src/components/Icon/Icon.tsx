import React, { ReactElement } from 'react';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { ReactComponent as GlobeIcon } from '../../assets/svg/globe.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as DoctorIcon } from '../../assets/svg/doctors.svg';
import { ReactComponent as SymptomsIcon } from '../../assets/svg/symptoms.svg';
import { ReactComponent as AttentionIcon } from '../../assets/svg/attention.svg';
import { ReactComponent as CoronaGreenBigIcon } from '../../assets/svg/corona-green-big.svg';
import { ReactComponent as CoronaGrayBigIcon } from '../../assets/svg/corona-gray-big.svg';
import { ReactComponent as MaskIcon } from '../../assets/svg/mask.svg';
import { ReactComponent as HandsIcon } from '../../assets/svg/hands.svg';
import { ReactComponent as DistancingIcon } from '../../assets/svg/distancing.svg';
import { ReactComponent as CoronaGreyIcon } from '../../assets/svg/corona-grey.svg';
import { ReactComponent as CoronaRedIcon } from '../../assets/svg/corona-red.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

interface IIcon {
  type:string,
  className:string,
  onClick?:()=>{},
}

interface ITypeToIconMap {
  [key:string]:(props:IProps) => ReactElement,
}

interface IProps {
  className: string,
  onClick?:()=>{},
}

const TypeToIconMap:ITypeToIconMap = {
  logo: (props:IProps) => <LogoIcon className={props.className} onClick={props.onClick} />,
  facebook: (props:IProps) => <FacebookIcon className={props.className} />,
  twitter: (props:IProps) => <TwitterIcon className={props.className} />,
  instagram: (props:IProps) => <InstagramIcon className={props.className} />,
  globe: (props:IProps) => <GlobeIcon className={props.className} />,
  doctors: (props:IProps) => <DoctorIcon className={props.className} />,
  symptoms: (props:IProps) => <SymptomsIcon className={props.className} />,
  attention: (props:IProps) => <AttentionIcon className={props.className} />,
  coronaGreenBig: (props:IProps) => <CoronaGreenBigIcon className={props.className} />,
  coronaGrayBig: (props:IProps) => <CoronaGrayBigIcon className={props.className} />,
  mask: (props:IProps) => <MaskIcon className={props.className} />,
  hands: (props:IProps) => <HandsIcon className={props.className} />,
  distancing: (props:IProps) => <DistancingIcon className={props.className} />,
  coronaGrey: (props:IProps) => <CoronaGreyIcon className={props.className} />,
  coronaRed: (props:IProps) => <CoronaRedIcon className={props.className} />,
  search: (props:IProps) => <SearchIcon className={props.className} onClick={props.onClick} />,
  close: (props:IProps) => <CloseIcon className={props.className} onClick={props.onClick} />,

};

const Icon:React.FC<IIcon> = ({ type, className, onClick }): ReactElement => (
  TypeToIconMap[type]({ className, onClick }));

export default Icon;
