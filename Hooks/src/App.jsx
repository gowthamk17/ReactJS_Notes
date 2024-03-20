import { useCallback, useState } from 'react'
import './App.css'
import UseState from './hooks/UseState';
import UseCallBack from './hooks/UseCallBack';
import UseContext from './hooks/UseContext';
import UseEffect from './hooks/UseEffect';
import UseId from './hooks/UseId';
import UseRef from './hooks/UseRef';
import UseImperativeHandle from './hooks/UseImperativeHandle';
import UseMemo from './hooks/UseMemo';
import UseReducer from './hooks/UseReducer';
import UseTransition from './hooks/UseTransition';
function App() {

  return (
    <>
      <UseState />
      <UseCallBack />
      <UseContext />
      <UseEffect />
      <UseId />
      <UseRef />
      <UseImperativeHandle />
      <UseMemo arr={[1,2,3,4,5,6,7,8,9,0]} />
      <UseReducer />
      <UseTransition />
    </>
  )
}

export default App
