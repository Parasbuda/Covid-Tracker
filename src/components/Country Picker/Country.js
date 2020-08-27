import React, { useState, useEffect } from "react"
import { NativeSelect, FormControl } from "@material-ui/core"

import { fetchCountries } from "../../api"

import styles from "./Country.module.css"

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const selected = await fetchCountries()
      setCountries(selected)
    }

    fetchAPI()
  }, [])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.length
          ? countries.map((country, i) => (
            
              <option key={i} value={country}>
                {country}
               </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  )
}

export default Countries
