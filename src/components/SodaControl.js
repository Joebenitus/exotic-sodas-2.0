import React from 'react';
import SodaDetail from './SodaDetail';
import SodaForm from './NewSodaForm';
import SodaList from './SodaList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSoda: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda !== null) {
      this.setState({
        selectedSoda: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const { dispatch } = this.props;
    const { name, flavor, cans, id } = newSoda;
    const action = {
      type: 'ADD_SODA',
      name,
      flavor,
      cans,
      id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.props.masterSodaList[id];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_SODA',
      id
    }
    dispatch(action);
    this.setState({
      selectedSoda: null
    })
  }

  handleSellingSoda = (id) => {
    const soldSoda = this.state.masterSodaList.filter(soda => soda.id === id)[0];
    if (parseInt(soldSoda.cans) < 1) {
      soldSoda.cans = 'Sold Out!';
    }
    soldSoda.cans = soldSoda.cans - 1 || 'Sold Out!'
    this.setState({
      selectedSoda: soldSoda
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const sodaControlStyling = {
      paddingTop: '50px'
    }
    if (this.state.selectedSoda !== null) {
      currentlyVisibleState = <SodaDetail
      soda={this.state.selectedSoda}
      onClickingDelete={this.handleDeletingSoda} 
      onClickingSell={this.handleSellingSoda}/>
      buttonText = 'Return to Soda List';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <SodaForm 
      onNewSodaCreation={this.handleAddingNewSodaToList}/>
      buttonText = 'Return to Soda List';
    } else {
      currentlyVisibleState = <SodaList 
      sodaList={this.props.masterSodaList} 
      onSodaSelection={this.handleChangingSelectedSoda}/>
      buttonText = 'Add Soda';
    }
    return (
      <React.Fragment>
        <div style={sodaControlStyling}>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    )
  }
}

SodaControl.propTypes = {
  masterSodaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterSodaList: state.masterSodaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SodaControl = connect(mapStateToProps)(SodaControl)

export default SodaControl;