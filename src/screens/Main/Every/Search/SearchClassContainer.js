import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryClassList} from '../../../../modules/category';
import SearchClassPresenter from './SearchClassPresenter';
import Loader from '../../../../components/Common/Loader';
import Error from '../../../../components/Common/Error';
const SearchContainer = ({navigation, currentCategory}) => {
  const {data, loading, error} = useSelector(
    (state) => state.category.searchList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryClassList(currentCategory));
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) return <Error />;

  if (!data.classList) return null;

  return (
    <SearchClassPresenter navigation={navigation} classList={data.classList} />
  );
};

export default SearchContainer;
