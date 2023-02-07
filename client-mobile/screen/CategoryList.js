import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions} from 'react-native'
import backround from '../assets/Home.png'
import arrow from '../assets/a3.png'
import icon from '../assets/mathematics-icon.jpg'
import Category from './Category'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CategoryList () {
   

   return (
      
      <View>
            <ImageBackground source={backround} style={styles.backroundContainer}>
                  <Text style={{
                     paddingHorizontal: 20, 
                     fontSize: 35, 
                     paddingTop: 40,
                     color: "#FFF",
                     fontWeight: "bold", 
                     marginTop: 50
                  }}> 
                     Start Learning
                  </Text>
                  <Text style={{
                     paddingHorizontal: 20, 
                     fontSize: 35,
                     color: "#FFF",
                     fontWeight: "bold",
                  }}> 
                     Username
                  </Text>


                  <View style={{
                     flexDirection: "row",
                     alignItems: "center", 
                     backgroundColor: "#FFF2F2",
                     marginTop: 100,
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
                           Level Counting : 4
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
                        source={icon}
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
               <ScrollView>

                  <Category 
                  level={1}
                  title="Counting"
                  bg="#fdddf3"
                  />
                  <Category 
                  level={2}
                  title="Counting"
                  bg="#fdddf3"
                  />
                  <Category 
                  level={3}
                  title="Counting"
                  bg="#fdddf3"
                  />
                  <Category 
                  level={4}
                  title="Counting"
                  bg="#fdddf3"
                  />

               </ScrollView>
            </ImageBackground>
      </View>
   )

}


const styles = StyleSheet.create({

   backroundContainer: {
      height: windowHeight, 
      width: windowWidth,
      position: 'absolute'
   }

})