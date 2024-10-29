import { COLORS, FONTS, SIZES } from "@/constants/themes";
import { StyleSheet, Platform } from "react-native";

//

const GlobalStyles = StyleSheet.create({
  DeviceSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    justifyContent: "center",
    alignContent: "center",
  },

  ScrollView: {},

  Container: {
    flex: 1,
    paddingHorizontal: 10,
  },

  Input: {
    backgroundColor: "#c7c6cc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
  },
  InputErrorText: {
    paddingHorizontal: 10,
    color: "red",
    //backgroundColor: "blue",
  },
  InputLabel: {},

  InputMultiline: {
    // backgroundColor: COLORS.light.InputBackgroundColor,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "black",
    color: "#000",
  },

  Title: {
    color: "black",
    fontSize: SIZES.text.medium,
    fontFamily: FONTS.poppins.MEDIUM,
  },
  TitleDark: {
    color: "black",
    fontSize: SIZES.text.medium,
    fontFamily: FONTS.poppins.MEDIUM,
  },
  TitleMedium: {
    color: "black",
    fontSize: SIZES.text.medium,
    fontFamily: FONTS.poppins.MEDIUM,
  },

  SubTitle: {
    color: "black",
    fontSize: SIZES.text.small,
    fontFamily: FONTS.poppins.MEDIUM,
  },

  Flatlist: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  FlatlistItem: {
    marginVertical: 5,
    color: "#fff",
  },

  TextTown: {
    fontSize: SIZES.text.small,
    fontFamily: FONTS.poppins.MEDIUM,
    textAlign: "justify",
    lineHeight: 13,
  },

  TextDate: {},
  TextTime: {},

  TextCarType: {
    color: "#3920ca",
    fontSize: SIZES.text.xSmall,
    // fontFamily: FONTS.agbalumo.REGULAR,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
    width: 100,
    marginLeft: 10,
    paddingHorizontal: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },

  TextStation: {
    fontSize: SIZES.text.small,
    fontFamily: FONTS.poppins.MEDIUM,
    textAlign: "justify",
    lineHeight: 13,
  },
  TextTrip: {
    color: "#3920ca",
    fontSize: SIZES.text.xSmall,
    fontFamily: FONTS.agbalumo.REGULAR,
    marginLeft: 10,
    paddingHorizontal: 8,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default GlobalStyles;
