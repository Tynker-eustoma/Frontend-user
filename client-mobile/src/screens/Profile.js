import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   ImageBackground,
   Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Feather } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
// import GifImage from "@lowkey/react-native-gif";

const Profile = ({navigation}) => {
   const user = useSelector((state) => state.user.user)
   const [score, setScore] = useState(0);

   let date 
   
   const year = user.createdAt.slice(0,4)
   const month = user.createdAt.slice(5,7)
   const day = user.createdAt.slice(8,10)

   date = day + '/' + month + '/' + year

   return (
   <SafeAreaView style={styles.container}>
      <ImageBackground
         source={{
            uri: "https://i.pinimg.com/736x/f5/64/9d/f5649d8dbe6134e4427709daafbd4431.jpg",
         }}
         resizeMode="cover"
         style={styles.image}
      >
         <View style={styles.profileContainer}>
            <Image
            source={{uri: 'https://media.tenor.com/SS7BpbNLWwwAAAAi/bear-love.gif'}}
            style={styles.avatar}
         />
         <View style={styles.infoCard}>
            <Text style={styles.name}>{user.username}</Text>

            <Text style={{
               fontSize: 15,
               color: 'grey',
               marginBottom: 20
            }}>
               Joined:  {date}
            </Text>
            <Text style={styles.level}>
               Counting
            </Text>
            <Text style={styles.levelUser}>
               Level {user.lvlCount}
            </Text>
            <View style={[styles.progressBarContainer,
                  { width: `${(user.lvlCount / 30) * 100}%` }]}>
            <View
               style={[
                  styles.progressBar,
               ]}
            />
            </View>

            <Text style={styles.level}>
               Guessing
            </Text>
            <Text style={styles.levelUser}>
               Level {user.lvlGuess}
            </Text>
            <View style={[styles.progressBarContainer, 
                  { width: `${(user.lvlGuess / 30) * 100}%` }]}>
            <View
               style={[
                  styles.progressBar,
                  ]}
               />
            </View>

            <Text style={styles.level}>
               Basic English
            </Text>
            <Text style={styles.levelUser}>
               Level {user.lvlLearn}
            </Text>
            <View style={[styles.progressBarContainer,
                  { width: `${(user.lvlLearn / 30) * 100}%` },
                  ]}>
               <View
                  style={[
                  styles.progressBar,
                  ]}
               />
            </View>
            </View>
         </View>

      <View style={{
         height: 60,
         width: "100%",
         justifyContent:'space-between',
         flexDirection: 'row', 
         backgroundColor: 'white',
         paddingHorizontal: 100,
         alignSelf:'center',
         position: 'absolute',
         bottom:0
      }}>
         {/* <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'#e28743'}}>Ga</Text>
          */}
         {/* <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'#e28743'}}>Ga</Text> */}
         <TouchableOpacity onPress={() => {
            navigation.navigate('categories')
         }}>
            <Ionicons name="game-controller-outline" size={30} color="black" style={{marginTop: 13}}/>
         </TouchableOpacity>
            <FontAwesome name="user-circle" size={30} color="#f58084" style={{marginTop: 13}}/>
      </View>
      </ImageBackground>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 300,
    height: 220,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  infoCard: {
    backgroundColor: "white",
    width: 350,
    padding: 30,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color:'grey',
  },
  explanation: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: "center",
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: "#f58084",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#f58084",
    borderRadius: 10,
  },
  Button: {
    backgroundColor: "#FFA500",
    opacity: 0.7,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
  level: {
   fontSize: 18,
   color: 'grey'
  }, 
  levelUser: {
   fontSize: 13,
   color: 'grey'
  }
});

export default Profile;
