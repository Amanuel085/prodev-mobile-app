import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { HEROLOGO, BACKGROUNDIMAGE, FACEBOOKLOGO, GOOGLELOGO } from "../constants";
import { styles } from "../styles/_mainstyle";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your favorite place here</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>The best prices for over 2 million</Text>
            <Text style={styles.titleSubText}>properties worldwide</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Join now</Text>
            </TouchableOpacity>
          </Link>
        </View>

<View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>Or continue with</Text>
          <TouchableOpacity>
            <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}