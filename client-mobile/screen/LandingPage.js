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
          backgroundColor: "#ffa500",
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
          backgroundColor: "#ffa500",
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
          backgroundColor: "#ffa500",
          image: (
            <Image
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Counting</Text>,
          subtitle: (
            <Text style={styles.subtitle}>Ini nanti deskripsi game counting</Text>
          ),
        },
        {
          backgroundColor: "#ffa500",
          image: (
            <Image
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Guessing</Text>,
          subtitle: (
            <Text style={styles.subtitle}>Ini nanti deskripsi game guessing</Text>
          ),
        },
        {
          backgroundColor: "#ffa500",
          image: (
            <Image
              source={require("../assets/avatar3.png")}
              style={styles.image}
            />
          ),
          title: <Text style={styles.title}>Basic English</Text>,
          subtitle: (
            <Text style={styles.subtitle}>Ini nanti deskripsi game basic english</Text>
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
