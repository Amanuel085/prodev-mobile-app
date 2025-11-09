import PropertyListing from "../../components/PropertyListing";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Search Bar */}
      <View className="bg-white p-4 border-b border-gray-200">
        <View className="flex-row items-center bg-gray-100 rounded-lg p-2">
          <View className="flex-1">
            <Text className="text-gray-500 text-sm">Where to?</Text>
            <TextInput
              className="text-base py-1"
              placeholder="Location . Date . Add guest"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <View className="bg-[#34967C] p-2 rounded-lg ml-2">
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Filters */}
      <View className="h-20 bg-white border-b border-gray-100">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        >
          <View className="flex-row space-x-4">
            {FILTERS.map((filter, index) => (
              <View 
                key={index} 
                className="items-center justify-center px-4 py-2 border border-gray-200 rounded-full flex-row space-x-2"
              >
                <Image
                  source={require("../../assets/images/mansion.png")}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-gray-700">{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Property Listings */}
      <ScrollView className="flex-1 bg-gray-50">
        <PropertyListing listings={SAMPLE_DATA} />
        <View className="items-center py-6">
          <TouchableHighlight 
            className="bg-white border border-gray-200 rounded-lg px-6 py-3"
            underlayColor="#F3F4F6"
          >
            <Text className="text-gray-700 font-medium">Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;