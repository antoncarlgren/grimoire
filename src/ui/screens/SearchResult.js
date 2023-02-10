import { useCallback, useEffect, useState } from 'react';
import { getItemsFromApi } from '../../api/ApiClient';
import { StyleSheet, FlatList } from 'react-native';
import { storeValue, loadValue } from '../../logic/Storage';
import { globalStyles, schoolTextColors } from '../../constants/styles/GlobalStyles';
import ContentContainer from '../components/containers/ContentContainer';
import ItemCard from '../components/containers/ItemCard';
import LoadingAnimation from '../components/LoadingAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchResult = ({ route, navigation }) =>  {
  const { path } = route.params;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  
  const loadItems = async () => {
    const data = await loadValue(path) ?? await getItemsFromApi(path);
      storeValue(path, data);
      setItems([...items, ...data]);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await loadItems();
      setLoading(false);
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = useCallback(({ item, textStyle }) => (
    <ItemCard details={ item } textStyle={ textStyle } />
  ), []);

  return (

    <ContentContainer 
      style={ [styles.contentContainer] }>
        { loading
          ? 
          <LoadingAnimation/>
          :
          <FlatList 
          style={ [styles.results, globalStyles.ph10] }
          data={ items }
          renderItem={ renderItem }
          keyExtractor={ (item) => item.slug } />
      }
      </ContentContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  results: {
    width: '100%'
  }
});

export default SearchResult;