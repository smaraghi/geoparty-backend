import React, { useState, useEffect } from 'react'
import CountryHeader from '../displays/CountryHeader';
import { withRouter } from 'react-router-dom'

const DisplayContainer = (props) => {
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState(false)

  const getCountry = () => {
    let country = props.location.pathname.split('/')[2]
    return country.charAt(0).toUpperCase() + country.slice(1)
  }

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/countries/' + getCountry())
    .then(res => res.json())
    .then(country => {
      setCountryData(country)
      setLoading(false)
    })
  }, [])


  return(
    loading ?
    <h1>loading...</h1>
    :
    <div>
      <CountryHeader countryName={countryData.name} />
    </div>
  )
}

export default withRouter(DisplayContainer)