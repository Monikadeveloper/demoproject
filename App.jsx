import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import TodoApp from './src/TodoApp';
import MainScreen from './src/MainScreen';

function App() {
  return (
       <SafeAreaView>
        <View>
          <MainScreen/>
          {/* <TodoApp/> */}
        </View>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});

export default App;
