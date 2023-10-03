import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"row",
        backgroundColor:"blue"
    },
    box: {
        flex: 2,
        backgroundColor:"yellow"
    },
    midBox: {
        flex:1,
    },
    boxText: {
        paddingTop: StatusBar.currentHeight,
    },

})