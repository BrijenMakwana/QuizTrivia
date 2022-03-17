import { SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import QuestionBoard from '../components/QuestionBoard';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <QuestionBoard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

  },
  
});
