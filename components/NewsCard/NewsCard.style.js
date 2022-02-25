import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin:10,
        borderRadius: 10
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius:10
    },
    inner_container: {
        padding: 12
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    description: {
        marginTop:5,
    },
    author: {
        fontStyle: "italic",
        textAlign: "right"
    }
})