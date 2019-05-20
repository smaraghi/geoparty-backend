import React, { useState, useEffect } from 'react'
import CountryHeader from '../displays/CountryHeader'
import CountrySummary from '../displays/CountrySummary'
import CountryGeography from '../displays/CountryGeography'

const DisplayContainer = (props) => {
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:3000/countries/${props.activeCountry}`)
      .then(res => res.json())
      .then(country => {
        setCountryData(country)
        setLoading(false)
      })
    }, [props.activeCountry])

  return(
    loading ?
    <h1>loading...</h1>
    :
    <div>
      <CountryHeader countryName={countryData.name} />
      <CountrySummary countryData={countryData} />
      <CountryGeography countryData={countryData} />
    </div>
  )
}

export default DisplayContainer
