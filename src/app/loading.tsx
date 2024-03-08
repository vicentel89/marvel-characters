import Loader from './_components/loader';
import classes from './loading.module.css';

export default function Loading() {
  return (
    <div className={classes.container}>
      <Loader />
    </div>
  );
}
