import {Text, View, Image, StyleSheet} from 'react-native'
import image from '../assets/Image-quiz.jpg'

function QuizSection() {

   return (
      <View style={styles.imageContaint}>
         <Image source={image} style={styles.image}/>
      </View>
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
   }
})

export default QuizSection;