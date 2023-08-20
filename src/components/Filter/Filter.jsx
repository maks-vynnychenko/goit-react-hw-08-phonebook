import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import { Input, Text } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const onChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <>
      <Text fontSize='xl'>Find contacts by name</Text>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find contact"
        width="300px"
        variant="flushed"
      />
    </>

  );
};

export default Filter;