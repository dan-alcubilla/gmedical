import { StyleSheet, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function RecordListItem({ item }) {
  return(
    <Link href={`${item.name}`} asChild>
      <Pressable style={styles.recordContainer}>
        <Text style={styles.recordName}>{item.name}</Text>
        <Text style={styles.recordSubtitle}>
          <Text style={styles.subValue}>Edad: {item.age}</Text> | <Text style={styles.subValue}>Creación: {item.creation_date}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  recordContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
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
  }
});
