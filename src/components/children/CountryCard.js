import React from "react";
import styles from "./style";

const CountryCard = ({ country, index }) => {
  return (
    <div style={styles.main}>
      <img style={styles.image} src={country.flags.png} alt={country.flag} />
      <div style={styles.container}>
        <p style={styles.header}>{country.name.official}</p>
        <p style={styles.data}>
          <span style={styles.dataheader}>Population: </span>
          {country.population}
        </p>
        <p style={styles.data}>
          <span style={styles.dataheader}>Region: </span>
          {country.region}
        </p>
        <p style={styles.data}>
          <span style={styles.dataheader}>Captial: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
