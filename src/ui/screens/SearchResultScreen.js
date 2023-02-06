import { View, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles/GlobalStyles';
import ContentContainer from '../components/containers/ContentContainer';

const SearchResultScreen = ({ navigation }) =>  {
  return (
    <ContentContainer 
      style={[styles.container]}>
      <View 
        style={[globalStyles.centerContent]}>
      </View>
    </ContentContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  homeImageWrapper: {
    marginTop: 60,
    marginBottom: 20,
  },
  homeImage: {
    width: 288,
    height: 288,
    resizeMode: 'contain'
  },
  titleWrapper: {
    alignSelf: 'flex-start'
  }
});

export default SearchResultScreen;