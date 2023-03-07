import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";
import {findeName} from '../redux/filterSlice';


export const FilterByName = () => {
  const dispatch = useDispatch();
  // const currentState= useSelector(state=>state.numbers);

//   const getVisibleContacts = () => {
//   if (filteredQuery) {
//     const normalizedFilter = filteredQuery.toLowerCase();
//     return dispatch(findeName(currentState.filter(contact => {
//       return contact.name.toLowerCase().includes(normalizedFilter);
//     })));
//   }
//   return dispatch(findeName(currentState));
// };
// getVisibleContacts();
  const changeFilter = e => {
   dispatch(findeName(e.currentTarget.value))
  };

  return (
    <>
      <h3>Finde contacts by name</h3>
      <input
        onChange={changeFilter}
        type="text"
        name="filter"
        // value={filteredQuery}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Finde contacts by name"
        required
      />
    </>
  );
};

PropTypes.Filter = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
