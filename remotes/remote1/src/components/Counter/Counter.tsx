import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { bus } from 'host/eventBus';

import { counterSelectors, counterActions } from 'store/counter';

import styles from './Counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelectors.count);

  useEffect(() => {
    const handlerDecrement = () => {
      dispatch(counterActions.decrement());
    };

    const handlerIncrement = () => {
      dispatch(counterActions.increment());
    };

    bus.on('counter:decrement', handlerDecrement);
    bus.on('counter:increment', handlerIncrement);

    return () => {
      bus.off('counter:decrement', handlerDecrement);
      bus.off('counter:increment', handlerIncrement);
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
