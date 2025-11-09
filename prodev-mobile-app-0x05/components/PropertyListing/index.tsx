import { View } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { PropertListing } from "../../interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View style={{ flex: 1, rowGap: 10 }}>
      {listings?.map((listing, key) => (
        <PropertyListingCard key={key} {...listing} />
      ))}
    </View>
  );
};

export default PropertyListing;
