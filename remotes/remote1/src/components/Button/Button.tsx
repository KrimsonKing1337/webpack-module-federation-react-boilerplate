import type { PropsWithChildren } from 'react';

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
