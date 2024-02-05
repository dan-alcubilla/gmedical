import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import records from '../../assets/data/records.json';
import { useState } from "react";

export default function ExersiceDetailsScreen() {
  const params = useLocalSearchParams();

  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

  const record = records.find((item) => item.name === params.name);

  if (!record) {
    return <Text>Exercise not found</Text>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: record.name }} />

      <View style={styles.panel}>
        <Text style={styles.recordName}>{record.name}</Text>
          <Text style={styles.recordSubtitle}>
            <Text style={styles.subValue}>{record.service}</Text> | <Text style={styles.subValue}>{record.clinic_history}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text
          style={styles.instructions}
          numberOfLines={isInstructionExpanded ? 0 : 3}
        >
          {record.intervention}
        </Text>
        <Text
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
          style={styles.seeMore}
        >
          {isInstructionExpanded ? 'See less' : 'See more'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  recordName: {
    fontSize: 20,
    fontWeight: '500',
  },
  recordSubtitle: {
    color: 'dimgray',
  },
  subValue: {
    textTransform: 'capitalize'
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    alignSelf: 'center',
    padding: 5,
    fontWeight: '600',
    color: 'gray',
  }
});
