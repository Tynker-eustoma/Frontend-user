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
              source={require("../assets/avatar2.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Welcome Tynker</Text>,
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
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Counting</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              In this mode, you will be given questions in the form of pictures.
              You can choose the answer that you think best fits the given
              question. You can press the submit button when you are sure your
              answer is correct. When your answer is correct, you will be
              redirected to the next page. But when your answer is wrong, a
              notification will appear that your answer is wrong.
            </Text>
          ),
        },
        {
          backgroundColor: "#8D72E1",
          image: (
            <Image
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Guessing</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              In this mode, you will be given a question in the form of a word.
              You can choose the answer that you think best fits the given
              question. You can press the submit button when you are sure your
              answer is correct. When your answer is correct, you will be
              redirected to the next page. But when your answer is wrong, a
              notification will appear that your answer is wrong.
            </Text>
          ),
        },
        {
          backgroundColor: "#645CBB",
          image: (
            <Image
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Basic English</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              In this mode, you will be given questions in the form of a word
              and a picture. You are required to pronounce the answer you think
              is correct by pressing the microphone button. when your answer is
              correct, you will be redirected to the next page. when your answer
              is wrong, a notification will appear that your answer is wrong
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
    width: 300,
    height: 300,
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
