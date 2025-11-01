import type { PropsWithChildren } from 'react';

import styles from './Wrapper.scss';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  );
};
