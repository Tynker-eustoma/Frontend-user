import { Text, StyleSheet, Dimensions, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable'

export default function Play() {
    const theAnimations = [
        "fadeIn",
        "fadeInUp",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInUpBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",

        "flipInX",
        "flipInY",

        "slideInDown",
        "slideInUp",
        "slideInLeft",
        "slideInRight",

        "zoomIn",
        "zoomInDown",
        "zoomInUp",
        "zoomInLeft",
        "zoomInRight",
    ]

    const animation = theAnimations[Math.floor(Math.random() * theAnimations.length)]
    return (
        <>
            <Animatable.View
                animation={animation}
                duration={1000}
                delay={1000}
            >
                <SafeAreaView>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Games LEVEL 12</Text>
                    <View style={[styles.listContainer, { textAlign: 'center', fontSize: 20, fontWeight: 'bold', height: Dimensions.get('window').height / 3 }]}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>INI GAMBAR</Text>
                    </View>
                    <View style={[styles.listContainer, { textAlign: 'center', fontSize: 20, fontWeight: 'bold', height: Dimensions.get('window').height / 5 }]}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Pertanyaan</Text>
                    </View>

                </SafeAreaView>

            </Animatable.View>
        </>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
    },
});
