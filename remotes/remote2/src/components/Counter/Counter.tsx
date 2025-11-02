import { useDispatch, useSelector } from 'react-redux';

import { counterSelectors, counterActions } from 'store/counter';

import styles from './Counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelectors.count);

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
