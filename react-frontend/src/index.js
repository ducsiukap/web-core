import React from 'react';
import ReactDOM from 'react-dom/client';
// import User from './React001.Components';
// import MyComp from './React002.StateManagement';
// import UseStateApp from './React003.ReactHook.useState';
// import UseEffectApp from './React005.ReactHook.useEffect';
// import UseReducerApp from './React004.ReactHook.useReducer';
// import App from './React006.FormHandling';
import { CountryProvider } from './React006.ReactHook.createContext';
import SearchCountry from './React007.ReactHook.useContext_useRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}

    {/* <MyComp /> */}

    {/* <p style={{display: 'flex', justifyContent:'center'}}>useState</p>
    <UseStateApp />
    <hr />

    <p style={{display: 'flex', justifyContent:'center'}}>useEffect</p>
    <UseEffectApp /> */}

    {/* <UseReducerApp /> */}

    {/* <App /> */}

    {/* createContext & useContext */}
    <CountryProvider>
      <SearchCountry />
    </CountryProvider>


  </React.StrictMode>
);
