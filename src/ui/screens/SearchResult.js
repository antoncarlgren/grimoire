import { useCallback, useEffect, useState } from 'react';
import { getAllSpells } from '../../api/ApiClient';
import { StyleSheet, FlatList } from 'react-native';
import ContentContainer from '../components/containers/ContentContainer';
import SpellCard from '../components/containers/SpellCard';
import LoadingAnimation from '../components/LoadingAnimation';

const SearchResult = ({ route, navigation }) =>  {
  const { query } = route.params;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
        const spellData = await getAllSpells(query);
        setItems([...items, ...spellData]);
        setLoading(false);
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = useCallback(({ item }) => (
    <SpellCard details={item} />
  ), []);

  return (

    <ContentContainer 
      style={[styles.container]}>
        { loading
          ? 
          <LoadingAnimation/>
          :
          <FlatList 
          style={[styles.results]}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.slug} />
      }
      </ContentContainer>
  );
}

const styles = StyleSheet.create({
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