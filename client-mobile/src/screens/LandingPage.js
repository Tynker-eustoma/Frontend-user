import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/TynkerLogo.png")}
              style={styles.imageLogo}
            />
          ),
          title: <Text style={styles.title}></Text>,
          subtitle: <Text style={styles.subtitle}></Text>,
        },
        {
          backgroundColor: "#BFACE2",
          image: (
            <Image
              source={require("../assets/landingHello.gif")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Welcome to Tynker</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              Tynker is an e-learning app for kids that teaches counting, object
              recognition, and learn basic English.
            </Text>
          ),
        },
        {
          backgroundColor: "#A084DC",
          image: (
            <Image
              source={require("../assets/landingnCounting.gif")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Counting</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              in this mode, you will learn how to count 
              based on a question that shown in the form of a picture
            </Text>
          ),
        },
        {
          backgroundColor: "#8D72E1",
          image: (
            <Image
              source={require("../assets/landingGuessing.gif")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Guessing</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              in this mode, you will be given a question in the form of a word. 
              You need to find the answer by identification and match the question 
              with images that shown in the option
            </Text>
          ),
        },
        {
          backgroundColor: "#645CBB",
          image: (
            <Image
              source={require("../assets/landingLearning.gif")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Basic English</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              In this mode, you will be given questions in the form of a word
              and a picture. You are required to pronounce the answer you think
              is correct by pressing the microphone button.
            </Text>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    textAlign: "justify",
    margin: 20,
  },
  imageLogo: {
    width: 400,
    height: 400,
    resizeMode: "cover",
    alignSelf: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default LandingPage;
