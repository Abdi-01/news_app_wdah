import React from 'react';
import { Text, View } from 'react-native';
import { BackButton, NativeRouter, Route } from 'react-router-native';
import HeaderComp from './src/Components/Header';
import Home from './src/Pages/Home';
import LoginPage from './src/Pages/Login';
import NewsDetail from './src/Pages/NewsDetail';

const App = (props) => {
  return (
    // NativeRouter : untuk mengakomodir routing dari react-router
    <NativeRouter>
      {/* <HeaderComp /> */}
      <BackButton>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={Home} />
        <Route path="/detail" component={NewsDetail} />
      </BackButton>
    </NativeRouter>
  )
}

export default App