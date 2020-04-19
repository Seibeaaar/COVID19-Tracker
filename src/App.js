import React, {Component} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';

class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country
    })
  }

  render() {
    const { data, country } = this.state;
    return Object.keys(data).length ? (
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <CountryPicker countryPicker={this.handleCountryChange}/>
        <Chart data={this.state.data} countryName={this.state.country}/>
      </div>
    ) : (<Loader type="Puff" color="#00BFFF" height={100} width={100} className={styles.loader}/>)
  }
}

export default App;