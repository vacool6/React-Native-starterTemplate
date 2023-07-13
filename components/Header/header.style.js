import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgBox: {
    width: "6.25rem",
    height: "2.75rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "16px",
    fontStyle: "italic",
  },
  input: {
    paddingLeft: "1rem",
    paddingRight: "6rem",
    marginTop: "1rem",
    width: "9rem",
    border: "1px solid black",
    borderRadius: "2px",
  },
  searchBox: {
    position: "relative",
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    right: "1.5rem",
    top: "1.5rem",
  },
  crossIcon: {
    position: "absolute",
    right: "3.5rem",
    top: "1.5rem",
  },
  none: {
    display: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "95%",
  },
});

export default styles;
