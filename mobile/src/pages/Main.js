import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';


function Main({navigation}){
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition(){
      const {granted} = await requestPermissionsAsync();

      if(granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })

      }
    }

    loadInitialPosition();

  }, []);

  if(!currentRegion){
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{latitude:-8.2726512, longitude:-35.9612458}}>
          <Image style={styles.avatar} source={{uri:'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4' }}/>
          
          <Callout onPress={() => {
            navigation.navigate('Profile', {github_username: 'diego3g'});
          }}>
            <View style={styles.callout}>
              <Text style={styles.devName}>Diego Fernandes</Text>
              <Text style={styles.devBio}>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
              <Text style={styles.devTechs}>ReactJS, React Native, NodeJS</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <KeyboardAvoidingView style={styles.conteiner} behavior="padding"enabled>
        <View style={styles.searchForm}>
            <TextInput
            style={styles.searchImput}
            placeholder="Buscando devs por techs..."
            placeholderTextColor='#999'
            autoCapitalize="words"
            autoCorrect={false}
            />

            <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
              <MaterialIcons name="my-location" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
    );
}

const styles = StyleSheet.create({
  map:{
    flex:1
  },
  avatar:{
    width:54,
    height:54,
    borderRadius:4,
    borderWidth:4,
    borderColor: '#7D40E7'
  },

  callout:{
    width: 260,
  },

  devName:{
    fontWeight:'bold',
    fontSize:16,
  },

  devBio:{
    color: '#666',
    marginTop: 5,
  },

  devTechs:{
    marginTop: 5,
  },

  searchForm:{
    // position: 'absolute',
    bottom: 100,
    left: 20,
    right: 40,
    zIndex: 5,
    display: 'flex',
    flexDirection: "row",
  },

  searchImput:{
    flex: 0.9,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingRight: 20,
    fontSize:16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton:{
    width: 50,
    height: 50,
    backgroundColor: '#8E4Dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,

  },

})

export default Main;