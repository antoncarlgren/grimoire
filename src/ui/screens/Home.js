import { View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { paths } from '../../constants/ApiConfig';
import { globalStyles } from '../../constants/styles/GlobalStyles';
import { normalize } from 'react-native-normalize';
import ContentContainer from '../components/containers/ContentContainer';
import HomeHeader from '../components/text/HomeHeader';
import MainButton from '../components/input/MainButton';

const HomeScreen = ({ navigation }) =>  {

  return (
    <ContentContainer 
      style={ [styles.container] }>
      <KeyboardAvoidingView 
        style={ [globalStyles.centerContent] }
        behavior='position'>
        <View style={ [styles.homeImageWrapper] }>
          <Image
            style={ [styles.homeImage] }
            source={ require('../../assets/images/hat.png') }/>
        </View>
        <HomeHeader>
          GRIMOIRE
        </HomeHeader>
        <MainButton 
          title='Spells'
          onPress={ () => { navigation.navigate('SearchResult', {
            path: paths.spells,
            keys: ['name'],
            placeholder: 'Search Grimoire'
          });
        }}/>
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
    marginTop: normalize(60),
    marginBottom: normalize(20),
  },
  homeImage: {
    width: normalize(288),
    height: normalize(288),
    resizeMode: 'contain'
  },
  titleWrapper: {
    alignSelf: 'flex-start'
  }
});

export default HomeScreen;