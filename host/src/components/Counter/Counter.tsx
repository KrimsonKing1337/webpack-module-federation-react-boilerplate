import { useDispatch, useSelector } from 'react-redux';

import { bus } from 'eventBus';

import { counterSelectors, counterActions } from 'store/counter';

import styles from './Counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelectors.count);

  const minusClickHandler = () => {
    dispatch(counterActions.decrement());

    bus.emit('counter:decrement');
  };

  const plusClickHandler = () => {
    dispatch(counterActions.increment());

    bus.emit('counter:increment');
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
