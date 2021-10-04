import React, { ReactElement } from 'react';
import './Button.scss';

interface IButton {
    className:string,
    children:React.ReactNode,
    onClick:()=>{};
}

const Button:React.FC<IButton> = ({ className, children, onClick }): ReactElement => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
