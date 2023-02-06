import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from '../../constants/styles/GlobalStyles';
import ContentContainer from '../components/containers/ContentContainer';
import SearchField from '../components/input/SearchField';
import HomeHeader from '../components/text/HomeHeader';

const HomeScreen = ({ navigation }) =>  {
  return (
    <ContentContainer 
      style={[styles.container]}>
      <KeyboardAvoidingView 
        style={[globalStyles.centerContent]}
        behavior='position'>
        <View style={[styles.homeImageWrapper]}>
          <Image
            style={[styles.homeImage]}
            source={require('../../assets/images/hat.png')}/>
        </View>
        <HomeHeader>
          GRIMOIRE
        </HomeHeader>
        <SearchField 
          placeholder='Search for spells'
          onSubmitEditing={() => navigation.navigate('SearchResult')}/>
      </KeyboardAvoidingView>
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

export default HomeScreen;