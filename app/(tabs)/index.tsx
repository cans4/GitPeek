import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../searchBar'
import UserCard from '../userCard'

export default function Tab() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <UserCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
