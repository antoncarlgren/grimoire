import { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../../constants/styles/GlobalStyles';
import ContentContainer from '../components/containers/ContentContainer';
import ItemCard from '../components/containers/ItemCard';
import LoadingAnimation from '../components/LoadingAnimation';
import { useDataSource } from '../../hooks/UseDataSource'
import { paths } from '../../constants/ApiConfig';

const SearchResult = ({ route, navigation }) =>  {
  const { path } = route.params;
  //const [items, loading, error] = useDataInitializer(path);
  //const [items, error, loading] = useApiClient(paths.base + path);
  const [items, loading, error] = useDataSource(paths.base, path);

  const renderItem = useCallback(({ item, textStyle }) => (
    <ItemCard details={ item } textStyle={ textStyle } />
  ), []);

  return (
    <ContentContainer 
      style={ [styles.contentContainer] }>
        { loading
          ? <LoadingAnimation/>
          : <FlatList 
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
  results: {
    width: '100%'
  }
});

export default SearchResult;