import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable'
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getCategories, getUser } from '../stores/actions/actionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons'; 

const Games = ({ navigation, route }) => {
  const categories = useSelector((state) => state.categories.categories)
  const user = useSelector((state) => state.user.user)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const theCategories = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token")
      dispatch(getCategories(access_token))
      dispatch(getUser(access_token))
      } catch (error) {
      console.log(error)
      }
   }

   
   useEffect(() => {

   setLoading(true)
   setTimeout(() => {
      // console.log('jalan')
      setLoading(false)
      }, 1200)
      theCategories()
   }, [])

  const learnImage = 'https://cdn-images-1.medium.com/max/600/1*ecLr0KQpK205SpZjtdSM-g.gif'
  const countImage = 'https://media.tenor.com/5DT1ruyHGH0AAAAi/ami-cat-equations.gif'
  const guessImage = 'https://media.tenor.com/JrEhZmduHUIAAAAj/confusing-puzzled.gif'

  
  const renderItem = ({ item, index }) => {
     
   if(!categories || !user){
      return <Text>Loading bang..........</Text>
   }


   let image
   
   if(index == 0){
      image = countImage
   } else if (index == 1){
      image = guessImage
   } else if (index == 2){
      image = learnImage
   } else {
      image = 'https://media.tenor.com/bvPdoSdUszMAAAAi/love-heart.gif'
   }

    return (
      <Animatable.View
        animation={"fadeIn"}
        duration={1000}
        delay={index * 300}
      >
      <View style={styles.listContainer}>
         <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainer}>
               <Image source={{uri: image}} style={styles.image} />
            </View>
            <View style={{padding: 20, marginLeft: 15}}>
               <Text style={styles.nameText}>Game {item.name.toLowerCase()}</Text>
               <TouchableWithoutFeedback
                  onPress={() => {
                     // console.log("Ini games ", index)
                     navigation.navigate('games', {CategoryId: item.id, name:item.name}) //Insert Category ID games as route
                  }}>
               <View style={styles.button}>
                  <Text style={styles.buttonText}>Play</Text>
               </View>
            </TouchableWithoutFeedback>
            </View>
         </View>
      </View>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {
         loading &&
         <View
         style={{
            backgroundColor: '#FFF',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <Image
            source={{uri: 'https://media.tenor.com/HLcwNOIAbXEAAAAi/samifying-cheers.gif'}}
            style={{
               width: 130,
               height: 130,
            }}
         />
         <Text
            style={{
               fontSize: 30,
               color:'grey',
               fontWeight: 'bold',
               marginVertical: 20
            }}
         >
            Loading.....
         </Text>

      </View>
      }

      {
         !loading &&
      
         <ImageBackground 
         source={{uri: 'https://i.pinimg.com/564x/a8/9f/15/a89f15e4bc96903f0dfe183f3ab7137c.jpg'}}
         style={{
            width: '100%',
            height: '100%'
         }}
      >
      <Text 
         style={{
            marginVertical: 30,
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color:'#41617d'
         }}
      >
         Games
      </Text>
      <FlatList
         data={categories}
         renderItem={renderItem}
         keyExtractor={item => item.id}
         style={{
            marginTop: 20
         }}
         />

      <View style={{
         height: 60,
         width: "100%",
         justifyContent:'space-between',
         flexDirection: 'row', 
         backgroundColor: 'white',
         paddingHorizontal: 100,
         alignSelf:'center',
         position: 'absolute',
         bottom: 0
      }}>
         {/* <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'#e28743'}}>Ga</Text>
          */}
         {/* <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'#e28743'}}>Ga</Text> */}
         <Ionicons name="game-controller" size={30} color="#f58084" style={{marginTop: 13}}/>


         <TouchableOpacity onPress={() => {
            navigation.navigate('Profile')
         }}>
            <FontAwesome name="user-circle-o" size={30} color="black" style={{marginTop: 13}}/>
         </TouchableOpacity>


      </View>
      </ImageBackground>
      }
      
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  listContainer: {
    width: "90%",
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    shadowColor: "#000",
   shadowOffset: {
   	width: 0,
   	height: 3,
   },
   shadowOpacity: 0.29,
   shadowRadius: 4.65,

elevation: 7,
    borderWidth: 0.9,
    borderColor: '#e28743'
  },
  imageContainer: {
    margin: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: 100, height: 100, aspectRatio: 1 },
  nameText: {
    color: '#345c74',
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 20,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#f58084',
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },
});
