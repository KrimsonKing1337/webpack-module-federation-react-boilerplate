import type { PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren) => {
  return (
    <button>
      {children}
    </button>
  );
};
