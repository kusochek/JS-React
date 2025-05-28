import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { StyledLayoutWrapper, StyledMain } from './styled';

export default function Layout() {
  return (
    <StyledLayoutWrapper>
      <Header />
      <StyledMain>
        <Sidebar />
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledLayoutWrapper>
  );
}
