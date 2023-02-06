import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import image from '../assets/Image-quiz.jpg'
import { useState } from 'react'

function QuizSection() {

   // const [choice, setChoice] = useState('A')

   
   const [selectedOption, setSelectedOption] = useState(null);
   
   const handleSelectOption = (option) => {
         setSelectedOption(option);
      };

   return (
      <>
      <View style={styles.imageContaint}>
         <Image source={image} style={styles.image}/>
      </View>
      <View style={styles.contentContaint}>
         <Text style={styles.question}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         </Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, selectedOption === "A" ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption("A")}>
               <Text style={styles.textChoice}> 
                  2
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === "B" ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption("B")}>
               <Text style={styles.textChoice}> 
                  2
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === "C" ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption("C")}>
               <Text style={styles.textChoice}> 
                  2
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, selectedOption === "D" ? styles.buttonPress : styles.button]} onPress={() => handleSelectOption("D")}>
               <Text style={styles.textChoice}> 
                  2
               </Text>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonSubmitContainer}>
            <TouchableOpacity style={styles.buttonSubmit}>
               <Text style={styles.textButtonSubmit}> 
                  Submit
               </Text>
            </TouchableOpacity>
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
      marginVertical: 5,
      borderRadius: 10,
      alignSelf: 'center',
      marginVertical: 40,
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