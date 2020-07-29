import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {getCategoryClassList} from '../../../../modules/category';
import SearchClassPresenter from './SearchClassPresenter';
import Loader from '../../../../components/Loader';
const SearchContainer = ({navigation, currentCategory}) => {
  const {data, loading, error} = useSelector(
    (state) => state.category.searchList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryClassList(currentCategory));
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error)
    return (
      <View>
        <Text>에러...</Text>
      </View>
    );

  if (!data.classList) return null;

  return (
    <SearchClassPresenter navigation={navigation} classList={data.classList} />
  );
};

export default SearchContainer;
