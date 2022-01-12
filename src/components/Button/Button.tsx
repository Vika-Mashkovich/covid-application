import React, { ReactElement } from 'react';
import '../../core/colors.scss';
import './Button.scss';

interface IButton {
  className: string,
  children: React.ReactNode,
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ className, children, onClick }): ReactElement => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
