/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {

  SafeAreaView,
  ScrollView,

  Text,
  View,
} from 'react-native';



function App(): React.JSX.Element {
 


  return (
<SafeAreaView style={{ flex: 1 }}>
    <View  style={{ backgroundColor: 'grey', height: 50 }}>
      {/* Contenido de Arriba */}
    <Text>PRUEBA</Text>
    </View>
  <ScrollView style={{ flex: 1, backgroundColor: 'tomato' }}>
    
    {/* Contenido del ScrollView */}
    <Text>SCROLL</Text>
    <Text>SCROLL</Text>
    <Text>SCROLL</Text>

  </ScrollView>
  <View style={{ backgroundColor: 'yellow', height: 50 }}> 
   <Text>INFERIOR</Text> 
  </View>

 
</SafeAreaView>
  );
}




export default App;
