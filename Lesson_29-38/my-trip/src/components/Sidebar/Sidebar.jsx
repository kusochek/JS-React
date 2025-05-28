import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { StyledInput, StyledSidebar } from './styled';
import { filterAction } from '../../store/countries/actions';
import GlobalSearchContext from '../../context/searchContext';
// import { filter } from '../../store/countries/reducer';

export default function Sidebar() {
  const { setSearchValue } = useContext(GlobalSearchContext);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const { target } = event;
    dispatch(filterAction(target.value));
    setSearchValue(target.value);
  };

  return (
    <StyledSidebar>
      <StyledInput
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <Link to="/trip/create">Create Trip</Link>
    </StyledSidebar>
  );
}
