import { Link } from 'react-router-dom';
import { StyledHeader } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">FAV TRIPS</Link>
    </StyledHeader>
  );
}
