import React, {useState, useEffect} from 'react'
import CountryCard from './children/CountryCard'
import styles from './children/style'
const url = 'https://restcountries.com/v3.1/all'
const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries)
  }

  useEffect(() => {
    fetchCountries();
  },[])
  return (
    <div style={styles.block}>
      {countries.map((country, index) => {
        return <CountryCard country={country} key={index} />
      })}
    </div>
  )
}

export default Countries
