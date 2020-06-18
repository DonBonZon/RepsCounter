/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TopHeader from './Components/TopHeader';
import SingleExercise from './Components/SingleExercise';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark" />

        <ScrollView contentInsetAdjustmentBehavior="automatic">


          <TopHeader></TopHeader>

          <SingleExercise></SingleExercise>

        </ScrollView>

    </>
  );
};


export default App;
