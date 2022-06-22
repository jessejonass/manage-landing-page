import { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className='bg-manage-red-700 text-white rounded-3xl py-2 px-8'
      onClick={onClick}
    >
      <h1>{children}</h1>
    </button>
  );
};

export default Button;
