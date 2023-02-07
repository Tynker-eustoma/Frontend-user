import {Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import image from '../assets/Image-quiz.jpg'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as Speech from "expo-speech";
import Voice from "@react-native-voice/voice";
import { getGame, updateLevel } from '../stores/actions/actionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';

function QuizSection({navigation, route}) {

   // const [choice, setChoice] = useState('A')
   const {id} = route.params

   const dispatch = useDispatch()

   const game = useSelector((state) => state.games.game)

   const theGame = async () => {
      try {
        const access_token = await AsyncStorage.getItem("access_token")
        dispatch(getGame(id, access_token))
      } catch (error) {
        console.log(error)
      }
    }

   useEffect(() => {
      theGame()
   },[])
   console.log(game)

   if(!game){
      return <Text>Loading bang........</Text>
   }

   const speak = () => {
      // console.log('masuk')
      const thingToSay =
         "Sebutkan bahasa inggris dari angka satu, sebutkan 2 kali ya";
      Speech.speak(thingToSay);
   };

   
   const [selectedOption, setSelectedOption] = useState(null);
   
   const handleSelectOption = (option) => {
         setSelectedOption(option);
      };

   const submit = () => {
      
      if(selectedOption == game.answer){
         //harusnya update level
         console.log('benar')
         const update = async () => {
            try {
               
               const access_token = await AsyncStorage.getItem('access_token')

               updateLevel(game.CategoryId, access_token)
            } catch (error) {
               
               console.log(error)
            }
         }

         update()

      } else {
         //kembali ke menu game
         console.log('salah')
      }
   }

   return (
      <>
      <View style={styles.imageContaint}>
         <Image source={{uri: game.imgUrl}} style={styles.image}/>
      </View>
      <View style={styles.contentContaint}>
         <Text style={styles.question}>
            {game.question}
         </Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, selectedOption === game.optionA ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption(game.optionA)}>
               <Text style={styles.textChoice}> 
                  {game.optionA}
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === game.optionB ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption(game.optionB)}>
               <Text style={styles.textChoice}> 
                  {game.optionB}
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === game.optionC ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption(game.optionC)}>
               <Text style={styles.textChoice}> 
                  {game.optionC}
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === game.optionD ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption(game.optionD)}>
               <Text style={styles.textChoice}> 
                  {game.optionD}
               </Text>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonSubmitContainer}>
            <TouchableOpacity style={styles.buttonSubmit} onPress={
               () => {
                  submit()
               }
            }>
               <Text style={styles.textButtonSubmit}> 
                  Submit
               </Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={speak}>
            <Image
               source={{
                  uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Ficons8%2Fwindows-8%2F512%2FMobile-Speaker-icon.png&f=1&nofb=1&ipt=e1609a9f7229f3ca2ac29a876571a78560c0dcb4f1fd0585fadbdb9ed0ff404d&ipo=images",
               }}
               style={{ width: 30, height: 30 }}
            />
            </TouchableHighlight>

         </View>
      </View>
      </>
   )


}

const styles = StyleSheet.create({
   imageContaint:{
      flex: 0.4
   }, 
   image:{ 
      height:"100%", 
      width: "100%",
      resizeMode: 'stretch'
   }, 
   contentContaint: {
      flex: 0.7,
   },
   question: {
      fontSize: 21,
      marginVertical: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginHorizontal: 5,
      color: "#757573", 
      height: "15%"
   },
   button: {
      width: "42%", 
      height: "47%", 
      padding: 5,
      backgroundColor: 'rgba(123,104,238,0.8)',
      marginHorizontal: 15, 
      marginVertical: 5,
      borderRadius: 10,
      alignItems: 'center'
   },
   buttonPress: {
      width: "42%", 
      height: "47%", 
      padding: 5,
      backgroundColor: '#EBC7E6',
      marginHorizontal: 15, 
      marginVertical: 5,
      borderRadius: 10,
   },
   buttonContainer: {
      width: "100%",
      height: "45%", 
      padding: 5, 
      flexDirection: 'row', 
      flexWrap: 'wrap',
   }, 
   buttonSubmitContainer: {
      height: "25%",
      backgroundColor: 'white', 
      width: "100%",
   },
   buttonSubmit: {
      width: "47%", 
      height: "47%", 
      padding: 5,
      backgroundColor: 'rgba(123,104,238,0.8)',
      marginHorizontal: 5,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 40,
      alignItems: 'center', 
      justifyContent: 'center', 
   },
   textButtonSubmit: {
      fontSize: 20, 
      fontWeight: '600', 
      color: 'white', 
      letterSpacing: 0.5
   },
   textChoice: {
      fontSize: 20, 
      fontWeight: '600', 
      color: 'white', 
      letterSpacing: 0.5,
   },
})

export default QuizSection;