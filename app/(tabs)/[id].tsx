import { View } from "@/components/Themed";
import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";

const info = () => {
  const { id } = useLocalSearchParams();
    return (
        <View>
            <Text style={{fontSize:20}}>This is a page id: {id}</Text>
        </View>
    );
};

export default info;
