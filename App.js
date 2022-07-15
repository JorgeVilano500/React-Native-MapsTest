import * as React from 'react';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Loading from './src/components/Loading';

function   App() {
  const [loading, setLoading] = useState(true);
  const [pin, setPin] = useState({
    latitude: 37.78825,
        longitude: -122.4324,
  })
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
     setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
      setLoading(false);
    })();
  }, []);

  

  if(loading) return(<View style={styles.container2}><Loading size={100} /></View>)

  return (
    <>
    <View style={styles.container}>
      {pin && (
        <MapView style={styles.map} 
        initialRegion={{
         latitude: pin.latitude,
         longitude: pin.longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
       provider='google'
       >
         <Marker
         coordinate={pin}
         title="San Francisco Ay"
         description='Some Shit'
         pinColor='blue'
         draggable={true}
         onDragStart={(e) => {
           console.log('drag start', e.nativeEvent.coordinate)
         }}
         onDragEnd={(e) => {
           console.log('drag end', e.nativeEvent.coordinate);
           setPin({
             latitude: e.nativeEvent.coordinate.latitude,
             longitude: e.nativeEvent.coordinate.longitude
           })
           console.log(pin.latitude, pin.longitude)
         }}
         >
         </Marker>
           <Circle
           center={pin}
           radius={100}
           />
         </MapView>
      )}
      
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container2: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#010100'
  }
});

export default App;