import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-red-500 h-16">
      <Text className="text-white font-bold">Open up App.tsx to start working on ape!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
