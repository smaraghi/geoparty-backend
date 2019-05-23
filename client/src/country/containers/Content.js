import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Summary from '../components/Summary'
import GeographyTable from '../components/GeographyTable'
import OverviewTable from '../components/OverviewTable'
import { Header } from 'semantic-ui-react'

const Content = (props) => {
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
      <Title countryName={countryData.name} />
      <Summary countryData={countryData} />
      <Header as='h2' className="country-table-header">Overview</Header>
      <OverviewTable countryData={countryData} />
      <Header as='h2' className="country-table-header">Geography</Header>
      <GeographyTable countryData={countryData} />
    </div>
  )
}

export default Content
