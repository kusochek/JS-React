import { Link } from 'react-router-dom';
import { StyledInput, StyledSidebar } from './styled';

export default function Sidebar({ onSearchChange }) {
  const handleSearchChange = (event) => {
    const { target } = event;
    onSearchChange(target.value);
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
