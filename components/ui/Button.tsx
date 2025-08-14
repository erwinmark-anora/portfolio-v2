import * as React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FunctionComponent<IButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'secondary' 
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn-base btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;