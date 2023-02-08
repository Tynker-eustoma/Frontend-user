import { Text, TouchableOpacity, View, Image } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ComponentGames (props) {
   let name, section, icon, userLevel

   const {level, CategoryId, id, user} = props 

   const navigation = useNavigation()

   if(CategoryId == 1){
      name = 'Counting'
      section = 'Quiz Section'
      icon = {uri: 'http://getdrawings.com/image/compass-circle-drawing-53.png'}
      userLevel = user.lvlCount
   } else if (CategoryId == 2) {
      name = 'Guessing'
      section = 'Guessing'
      icon = {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71C-pEIH%2BKL.png&f=1&nofb=1&ipt=a72b8a32e2d0a4b32721b79189909f083cd4b72675d42f2cbee5ef6befe06ea4&ipo=images'}
      userLevel = user.lvlGuess
   } else if (CategoryId == 3) {
      name = 'Learning'
      section = 'learning'
      icon = {uri: 'https://media.tenor.com/hGe2yAOuqVMAAAAi/book.gif'}
      userLevel = user.lvlLearn
   }

   const playGame = () => {
      if (CategoryId == 1){
         navigation.navigate('Quiz Section', {id}) //Insert Category ID games as route
      } else if (CategoryId == 2){
         navigation.navigate('Guessing', {id}) //Insert Category ID games as route
      } else if (CategoryId == 3){
         navigation.navigate('learning', {id}) //Insert Category ID games as route
      }
   }

   const block = () => {
      console.log('Hehe u nooobbb')
   }
   
   return (
      
      <TouchableOpacity
         onPress={ level <= userLevel? playGame : block}

         style={{
            flexDirection: "row", 
            backgroundColor: "#fdddf3", 
            padding: 20, 
            marginHorizontal: 20, 
            borderRadius: 20, 
            alignItems: "center", 
            marginTop: 10
         }}
      >

         <Image
            style={{
               width: 50, 
               height: 50
            }}
            source={icon}
         />


         <Text
            style={{
               color:"#345c74",
               fontWeight: "bold", 
               fontSize:15, 
               paddingHorizontal: 20, 
               width: 170
            }}
         >

            {name} level {level}

         </Text>

         {
            level <= userLevel? 
            
            <FontAwesome5 name="play-circle" size={35} color="#345c74"
            style={{
               marginLeft:40
            }}
            /> 
            
            : 
            
            <FontAwesome name="lock" size={35} color="#345c74" style={{
               marginLeft:50
            }}/>
         }
         

      </TouchableOpacity>
      
      )

}
