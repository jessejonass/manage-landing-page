import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  transparent,
}) => {
  return (
    <button
      className={`${
        transparent
          ? 'bg-transparent py-0 px-0'
          : 'bg-manage-red-700 py-2 px-8 text-white rounded-3xl '
      } ${className}`}
      onClick={onClick}
    >
      <h1>{children}</h1>
    </button>
  );
};

export default Button;
