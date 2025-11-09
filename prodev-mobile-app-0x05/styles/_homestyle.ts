import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    padding: 20,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
    paddingLeft: 10,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    height: 40,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    padding: 10,
  },
  filterContainer: {
    width: 80,
    height: 50,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  listingContainer: {
    flex: 1,
    padding: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  showMoreButtonText: {
    color: "#34967C",
    fontWeight: "600",
  },
});

export { styles };