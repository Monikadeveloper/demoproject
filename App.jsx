import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import TodoApp from './src/TodoApp';

function App() {
  return (
       <SafeAreaView>
        <View>
          <TodoApp />
        </View>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});

export default App;
