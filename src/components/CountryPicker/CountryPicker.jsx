import React, {useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import {countries} from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ countryPicker }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    }

    fetchCountries();
  }, [setFetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={e => countryPicker(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => <option value={country} key={index} >{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;