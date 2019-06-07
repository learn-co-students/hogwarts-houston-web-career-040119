import React from 'react'
import SortSelect from './filterbar_components/SortSelect'
import GreasedOnlyCheckbox from './filterbar_components/GreasedOnlyCheckbox'
import HiddenPigsButtons from './filterbar_components/HiddenPigsButton'

export default class FilterBar extends React.Component {


    render() {
       return(
        <div>
            <SortSelect sort={this.props.sort}/>
            <GreasedOnlyCheckbox filterByGreased={this.props.filterByGreased}/>
            <HiddenPigsButtons showHiddenHogs={this.props.showHiddenHogs}/>
        </div>
       )
    }


}