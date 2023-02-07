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
// import GifImage from "@lowkey/react-native-gif";

const Profile = () => {
  const user = useSelector((state) => state.users.user)
  const [score, setScore] = useState(0);

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
            source={require("../assets/try.gif")}
            style={styles.avatar}
          />
          <View style={styles.infoCard}>
            <Text style={styles.name}>{user.username}</Text>

            <Text style={styles.level}>
              Counting Level: {Math.floor(user.lvlCount / 30) + 1}
            </Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(score / 100) * 100}%` },
                ]}
              />
            </View>

            <Text style={styles.level}>
              Guessing Level: {Math.floor(user.lvlGuess / 30) + 1}
            </Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(score / 100) * 100}%` },
                ]}
              />
            </View>

            <Text style={styles.level}>
              English Level: {Math.floor(user.lvlLearn / 30) + 1}
            </Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(score / 100) * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.explanation}>
              Your score determines your level. Reach a score of 100 to unlock
              the next level.
            </Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.textButton}>Learn More</Text>
            </TouchableOpacity>
          </View>
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
    height: 250,
    borderRadius: 50,
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: "trasnparent",
    width: 350,
    height: 500,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  explanation: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: "center",
  },
  progressBarContainer: {
    height: 20,
    width: "80%",
    backgroundColor: "#FFA500",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FFA500",
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
});

export default Profile;
