import classes from './counter.module.css';

type CounterProps = {
  count: number;
};

const Counter = ({ count }: CounterProps) => {
  const resultText = count === 1 ? 'result' : 'results';

  return (
    <span className={classes.text} id="search-results" role="log" aria-live="polite">
      {count} {resultText}
    </span>
  );
};

export default Counter;
