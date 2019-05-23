import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import OverviewTable from '../components/OverviewTable';
import GeographyTable from '../components/GeographyTable';

const TableSwitch = props => {
  const context = useContext(shopContext)

  const activeTable = () => {
    switch(context.activeItem){
      case 'overview':
        return <OverviewTable countryData={props.countryData}/>
      case 'geography':
        return <GeographyTable countryData={props.countryData}/>
      default:
        console.log('hi')
        return null
    }
  }

  return(
    <div>
    {activeTable()}
    </div>
  )
}

export default TableSwitch