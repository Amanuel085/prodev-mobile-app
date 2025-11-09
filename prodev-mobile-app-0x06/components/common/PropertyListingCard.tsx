import { View, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropertyListingProps } from "@/interfaces";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <View className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-200">
      <View className="flex-1 p-4 justify-between">
        {/* Favorite Button */}
        <View className="items-end">
          <View className="p-1">
            {favorite ? (
              <FontAwesome name="heart" size={24} color="#E50000" />
            ) : (
              <EvilIcons name="heart" size={32} color="white" />
            )}
          </View>
        </View>

        {/* Property Info */}
        <View className="flex-row justify-between items-end">
          {/* Rating */}
          <View className="flex-row items-center bg-black/60 rounded-lg p-2">
            <MaterialIcons name="star-rate" size={24} color="#FAC02B" />
            <Text className="text-white font-bold ml-1">{rate}</Text>
          </View>

          {/* Property Details */}
          <View className="flex-1 ml-4">
            <View className="bg-black/60 p-3 rounded-lg">
              <Text className="text-white font-bold text-lg">{propertyName}</Text>
              <Text className="text-gray-200 text-sm">
                {location.street}, {location.city}, {location.country}
              </Text>
              <View className="mt-2">
                <Text className="text-white font-bold text-lg">
                  {currency}
                  {amount}
                  <Text className="text-gray-300 text-sm"> / night</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PropertyListingCard;