import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, FlatList} from 'react-native'
import backround from '../../assets/Home.png'
import arrow from '../../assets/a3.png'
import icon from '../../assets/mathematics-icon.jpg'
import ComponentGames from './ComponentGames'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGames } from '../../stores/actions/actionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const learnImage = 'https://cdn-images-1.medium.com/max/600/1*ecLr0KQpK205SpZjtdSM-g.gif'
const countImage = 'https://media.tenor.com/5DT1ruyHGH0AAAAi/ami-cat-equations.gif'
const guessImage = 'https://media.tenor.com/JrEhZmduHUIAAAAj/confusing-puzzled.gif'

let mainImage

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GamesNew ({ navigation, route }) {

   const games = useSelector((state) => state.games.games)
   const {CategoryId, name} = route.params
   
   if(CategoryId == 1){
      mainImage = countImage
   } else if (CategoryId == 2){
      mainImage = guessImage
   } else if (CategoryId == 3){
      mainImage = learnImage
   }

   const dispatch = useDispatch()
   const theGames = async () => {
      try {
         const access_token = await AsyncStorage.getItem("access_token")
         dispatch(getGames(CategoryId, access_token))
      } catch (error) {
         console.log(error)
      }
   }
   
   useEffect(() => {
      theGames()
   }, [])

   // console.log("++++++++++++++++++++++++++++++++++++++++++++")
   // console.log(games[0])
   // console.log("++++++++++++++++++++++++++++++++++++++++++++")

   const renderItem = ({item}) => {
      
      return (
         <ComponentGames
            id={item.id}
            CategoryId ={item.CategoryId}
            level={item.lvl}
         />
      )
   }


   return (
      
      <View>
            <ImageBackground source={{uri: 'https://i.pinimg.com/originals/74/ef/67/74ef6789f116afcec0fed4ac208d9c3f.jpg'}} style={styles.backroundContainer}>
                  <Text style={{
                     paddingHorizontal: 20, 
                     fontSize: 30, 
                     paddingTop: 40,
                     color: "#FFF",
                     fontWeight: "bold", 
                     marginTop: 110
                  }}> 
                     Start Learning, Username
                  </Text>
                  {/* <Text style={{
                     paddingHorizontal: 20, 
                     fontSize: 35,
                     color: "#FFF",
                     fontWeight: "bold",
                  }}> 
                     Username
                  </Text> */}


                  <View style={{
                     flexDirection: "row",
                     alignItems: "center", 
                     backgroundColor: "#FFF2F2",
                     marginTop: 50,
                     marginHorizontal: 20, 
                     borderRadius:20, 
                     paddingVertical: 30,
                     paddingLeft: 30,
                  }}>

                     <View>

                        <Text style={{
                           color:"#345c74", 
                           fontSize: 17,
                           fontWeight: "bold", 
                           width: 250,
                           paddingRight: 100
                        }}>
                           Level {name} : 4
                        </Text>

                        <TouchableOpacity

                     style={{
                        flexDirection: "row", 
                        backgroundColor: "#f58084", 
                        alignItems: "center", 
                        marginTop: 20, 
                        width: 150, 
                        paddingVertical: 10, 
                        borderRadius: 14, 
                        paddingHorizontal: 10, 
                        paddingLeft: 40
                           }}
                           >

                           <Text style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: '#FFF'
                           }}>
                              Start
                           </Text>

                           <Image 
                              source={arrow}
                              style={{
                                 marginLeft:40, 
                                 width: 10,
                                 height: 10,
                              }}
                              />


                        </TouchableOpacity>


                     </View>
                        <Image 
                        style={{
                           height: 80,
                           width: 80,
                           marginLeft: -40
                        }}
                        source={{uri: mainImage}}
                        />


                  </View>

                  <Text style={{
                     color: "#345c74",
                     fontWeight: "bold", 
                     fontSize: 20, 
                     paddingHorizontal: 20, 
                     marginTop: 20,
                     marginBottom: 10
                     }}>
                     Game List
                  </Text>
               <FlatList 
                  style={{marginVertical: 10}}
                  data={games}
                  renderItem={renderItem}
                  keyExtractor={games.id}
               >

               </FlatList>
            </ImageBackground>
      </View>
   )

}


const styles = StyleSheet.create({

   backroundContainer: {
      height: windowHeight, 
      width: windowWidth,
      position: 'absolute',
      resizeMode: 'contain'
   }

})