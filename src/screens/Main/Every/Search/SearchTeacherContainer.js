import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {getCategoryTeacherList} from '../../../../modules/category';
import Loader from '../../../../components/Loader';
import SearchTeacherPresenter from './SearchTeacherPresenter';
const SearchTeacherContainer = ({navigation, currentCategory}) => {
  const {data, loading, error} = useSelector(
    (state) => state.category.searchList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryTeacherList(currentCategory));
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error)
    return (
      <View>
        <Text>에러...</Text>
      </View>
    );

  if (!data.teacherList) return null;

  return (
    <SearchTeacherPresenter
      navigation={navigation}
      currentCategory={currentCategory}
      teacherList={data.teacherList}
    />
  );
};

export default SearchTeacherContainer;
