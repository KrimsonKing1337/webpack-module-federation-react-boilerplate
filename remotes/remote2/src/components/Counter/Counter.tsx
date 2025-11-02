import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { bus } from 'host/eventBus';

import { counterSelectors, counterActions } from 'store/counter';

import styles from './Counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelectors.count);

  useEffect(() => {
    const handler = (count: number) => {
      console.log(count);

      // dispatch(counterActions.setCount(count));
    };

    bus.on('counter:change', handler);

    return () => {
      bus.off('counter:change', handler);
    };
  }, []);

  const minusClickHandler = () => {
    dispatch(counterActions.decrement());
  };

  const plusClickHandler = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div className={styles.Wrapper}>
      <button onClick={minusClickHandler}>
        -
      </button>

      <div>
        {count}
      </div>

      <button onClick={plusClickHandler}>
        +
      </button>
    </div>
  );
};
