import React from 'react';
import { useStoreDispatch, useStoreSelector } from '../..';
import { ExampleAction } from '../../store/actions/Settings';
import { getExampleAction } from '../../store/selectors/selectors';
import s from './ExampleChangeState.module.scss';
export default function ExampleChangeState() {
  const dispatch = useStoreDispatch();
  const shareInfo = useStoreSelector(getExampleAction());
  console.log('shareInfo: ', shareInfo);

  const exampleHandler = () => {
    dispatch(ExampleAction(`new state! (${Math.floor(Math.random() * 100)})`));
  };
  return (
    <div className={s.wrapper}>
      <div onClick={exampleHandler} className={s.item}>
        Click me to change state
      </div>
      <br />
      <span>{shareInfo}</span>
    </div>
  );
}
