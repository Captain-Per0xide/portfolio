import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
  Button,
  Touchable,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Accelerometer } from "expo-sensors";
import color from "./helpers/color";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Video from "react-native-video";
const Tab = createBottomTabNavigator();

const TypewriterEffect = ({ texts, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState(""); // The text being typed out
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // The index of the current text
  const [index, setIndex] = useState(0); // Index for typing the current text

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    // Type the next character until the current text is fully typed
    if (index < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout); // Cleanup timeout on each render
    } else {
      // After typing is done, wait for a set delay before clearing text
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0); // Reset typing index
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
      }, delay);
    }
  }, [index, currentTextIndex, texts, speed, delay]);

  return (
    <View>
      <Text style={styles.text}>{displayedText}</Text>
    </View>
  );
};
const openLink = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url); // Opens the URL in the browser
    } else {
      Alert.alert("Can't handle this URL:", url);
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};
const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./assets/myImage.jpeg")}
          style={styles.profileImage}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          color: color.black,
          fontFamily: "Poppins-Light",
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        Hello, I am
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          color: "purple",
          fontFamily: "Poppins-Bold",
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        Ranju Mallik
      </Text>
      <TypewriterEffect
        texts={[
          "Web Developer",
          "React Native Developer",
          "Linux Enthusiast",
          "Open Source Contributor",
          "Flutter Development Hater",
        ]}
        speed={100} // typing speed in ms
        delay={1500} // delay before changing text
      />
      <View style={{ paddingBottom: 20 }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            padding: 20,
            color: color.black,
            fontWeight: 400,
            fontFamily: "Poppins-Regular",
          }}
        >
          {" "}
          I am a web developer with experience in building websites using
          React.js and Next.js. I have a strong understanding of the MERN stack
          (MongoDB, Express.js, React.js, Node.js) and have worked with Supabase
          for backend services. I am also a React Native developer.
        </Text>
        <View>
        <TouchableOpacity onPress={() => openLink("https://drive.google.com/uc?export=download&id=1I7JLt0eBX77w71rL0j-ZwYqKA3dEG3As")}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,borderWidth:1,borderRadius:10,padding:10, backgroundColor:color.purple}}>
            <Image style={{height:40,width:40}} source={require('./assets/cv.png')}/>
            <Text style={{fontSize:15,fontFamily:'Poppins-Bold',color:'white'}}>Download CV</Text>
          </View>
        </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
const SkillsScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ alignItems: "center", gap: 10 }}>
      <View
        style={{
          height: 300,
          width: 360,
          backgroundColor: color.red,
          borderColor: color.black,
          borderWidth: 2,
          justifyContent: "start",
          alignItems: "center",
          borderRadius: 20,
          gap: 10,
          padding: 6,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: "#5D0E41",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontFamily: "Poppins-Light",
            }}
          >
            Web Development
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            width: 300,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => openLink("https://nextjs.org/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_1.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink("https://reactjs.org/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://php.net/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://mysql.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_4.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://mongodb.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_5.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://supabase.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_6.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://vuejs.org/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_7.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://angular.dev/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_8.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://jquery.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_9.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://postgresql.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_10.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://nodejs.org/")}>
            <Image
              style={styles.image}
              source={require("./assets/webdev_11.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 250,
          width: 360,
          backgroundColor: color.red,
          borderColor: color.black,
          borderWidth: 2,
          justifyContent: "start",
          alignItems: "center",
          borderRadius: 20,
          gap: 10,
          padding: 6,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: "#5D0E41",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontFamily: "Poppins-Light",
            }}
          >
            Web Design
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            width: 300,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => openLink("https://figma.com/")}>
            <Image style={styles.image} source={require("./assets/ui_1.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://adobexdplatform.com/")}
          >
            <Image style={styles.image} source={require("./assets/ui_2.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://webflow.com/")}>
            <Image style={styles.image} source={require("./assets/ui_3.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://adobe.com/")}>
            <Image style={styles.image} source={require("./assets/ui_4.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://adobe.com/")}>
            <Image style={styles.image} source={require("./assets/ui_5.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://expo.dev/")}>
            <Image style={styles.image} source={require("./assets/ui_6.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 200,
          width: 360,
          backgroundColor: color.red,
          borderColor: color.black,
          borderWidth: 2,
          justifyContent: "start",
          alignItems: "center",
          borderRadius: 20,
          gap: 10,
          padding: 6,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: "#5D0E41",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontFamily: "Poppins-Light",
            }}
          >
            Ethical Hacking
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            width: 300,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => openLink("https://hackthebox.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/hacking_1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://offsec.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/hacking_2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://cisco.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/hacking_3.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 150,
          width: 360,
          backgroundColor: color.red,
          borderColor: color.black,
          borderWidth: 2,
          justifyContent: "start",
          alignItems: "center",
          borderRadius: 20,
          gap: 10,
          padding: 6,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: "#5D0E41",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontFamily: "Poppins-Light",
              flex: 0,
            }}
          >
            Server Management
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            width: 300,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => openLink("https://microsoft.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/server_1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://ubuntu.com/")}>
            <Image
              style={styles.image}
              source={require("./assets/server_2.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
const ProjectsScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ alignItems: "center", gap: 15 }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: color.red,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Poppins-Bold",
          }}
        >
          Apple Website Clone
        </Text>
        <TouchableOpacity
          onPress={() => openLink("https://appleindian.netlify.app/")}
        >
          <Image
            style={{ height: 200, width: 350 }}
            source={require("./assets/apple.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: color.red,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Poppins-Bold",
          }}
        >
          Portfolio Effect
        </Text>
        <TouchableOpacity
          onPress={() => openLink("https://beamish-lokum-534027.netlify.app/")}
        >
          <Image
            style={{ height: 200, width: 350 }}
            source={require("./assets/effects.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: color.red,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Poppins-Bold",
          }}
        >
          Fanta Project
        </Text>
        <TouchableOpacity
          onPress={() => openLink("https://fantaproject.netlify.app/")}
        >
          <Image
            style={{ height: 200, width: 350 }}
            source={require("./assets/fanta-project.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: color.red,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Poppins-Bold",
          }}
        >
          Homepage
        </Text>
        <TouchableOpacity
          onPress={() => openLink("https://homepagebyranju.netlify.app/")}
        >
          <Image
            style={{ height: 200, width: 350 }}
            source={require("./assets/effects.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);
const AboutMeScreen = () => {
  const [position, setPosition] = useState(
    new Animated.ValueXY({ x: 0, y: 0 })
  );

  useEffect(() => {
    // Subscribe to accelerometer updates
    const subscription = Accelerometer.addListener((data) => {
      const { x, y } = data;

      // Map accelerometer values to the card's movement
      Animated.spring(position, {
        toValue: { x: x * 50, y: y * 50 }, // Scale the movement
        useNativeDriver: true,
      }).start();
    });

    // Set update interval
    Accelerometer.setUpdateInterval(100);

    // Cleanup subscription on unmount
    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: position.x }, { translateY: position.y }],
          },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "start", alignItems: "center" }}>
          <Text style={{fontSize:30,color:color.purple,fontFamily:"Poppins-BoldItalic",textAlign:'center'}}>Contact Me</Text>
          <View
            style={{ flex: 0, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("./assets/myImage.jpeg")}
              style={styles.profileImage}
            />
          </View>
          <View style={{paddingTop:15,gap:25,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

          <Image style={{height:40 ,width:40}} source={require('./assets/linkedin.png')}/>
          <Image style={{height:40 ,width:40}} source={require('./assets/github.png')}/>
          <Image style={{height:40 ,width:40}} source={require('./assets/gmail.png')}/>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@expo-google-fonts/poppins").Poppins_400Regular,
    "Poppins-Bold": require("@expo-google-fonts/poppins").Poppins_700Bold,
    "Poppins-Light": require("@expo-google-fonts/poppins").Poppins_300Light,
    "Poppins-SemiBold": require("@expo-google-fonts/poppins")
      .Poppins_600SemiBold,
    "Poppins-Italic": require("@expo-google-fonts/poppins")
      .Poppins_400Regular_Italic,
    "Poppins-BoldItalic": require("@expo-google-fonts/poppins")
      .Poppins_700Bold_Italic,
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4F1787",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "Poppins-Bold",
          },
          headerTitleAlign: "center",
          tabBarStyle: {
            backgroundColor: color.red,
            height: 60,
            width: "100%",
          },
          tabBarActiveTintColor: color.black,
          tabBarInactiveTintColor: "#E8BCB9",
          tabBarLabelStyle: {
            fontSize: 15, // Font size of the label
            fontWeight: "bold", // Font weight of the label
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 30, width: 30 }}
                source={require("./assets/home.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 30, width: 30 }}
                source={require("./assets/skills.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 30, width: 30 }}
                source={require("./assets/projects.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About Me"
          component={AboutMeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 30, width: 30 }}
                source={require("./assets/aboutme.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.yellow,
    alignItems: "center",

    paddingTop: 20,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 120,
  },
  text: {
    fontSize: 23,
    color: color.purple,
    textAlign: "center",
    fontFamily: "Poppins-BoldItalic",
  },
  image: {
    height: 65,
    width: 65,
  },
  card: {
    width: 375,
    height: 400,
    backgroundColor: "#AB4459",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
