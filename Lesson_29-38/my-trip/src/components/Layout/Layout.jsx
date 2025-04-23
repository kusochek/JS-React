import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { StyledLayoutWrapper, StyledMain } from './styled';

export default function Layout() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return (
    <StyledLayoutWrapper>
      <Header />
      <StyledMain>
        <Sidebar onSearchChange={setSearchValue} />
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledLayoutWrapper>
  );
}
