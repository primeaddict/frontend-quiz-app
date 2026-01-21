import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.spinner} />
      <p className={style.text}>Loading...</p>
    </div>
  );
};
