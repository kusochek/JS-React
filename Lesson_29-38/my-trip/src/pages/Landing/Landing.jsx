import { useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { CardsGrid } from './styled';
import { fetchCountries } from '../../store/countries/thunks';
import GlobalSearchContext from '../../context/searchContext';

export default function Landing() {
  const {
    loading, error, countries, searchValue,
  } = useSelector((state) => state.countriesReducer);
  const { searchValue: searchValueContext } = useContext(GlobalSearchContext);
  console.log(searchValueContext);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length) return;
    dispatch(fetchCountries());
  }, [countries.length, dispatch]);

  const filteredCountries = useMemo(() => countries.filter((trip) => {
    const { country, city } = trip;
    const value = searchValue.toLowerCase();

    return country.toLowerCase().includes(value) || city.toLowerCase().includes(value);
  }), [searchValue, countries]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <CardsGrid>
      {filteredCountries.map((trip) => (
        <Card key={trip.id} trip={trip} />
      ))}
    </CardsGrid>
  );
}
