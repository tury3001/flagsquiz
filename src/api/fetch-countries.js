import * as countriesData from '../data/countries.json';

export const getCountries = ( regions ) => {

  const { countries } = countriesData;

  if (regions) {
    const countriesToReturn = countries.filter( country => regions.includes(country.region) ? country : null);    
    return countriesToReturn
  } else {
    return countries;
  }
}