import React from 'react';
import SodaDetail from './SodaDetail';
import SodaForm from './NewSodaForm';
import SodaList from './SodaList';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoda: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({ masterSodaList: newMasterSodaList,
                    formVisibleOnPage: false })
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.masterSodaList.filter(soda => soda.id === id)[0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const newMasterSodaList = this.state.masterSodaList.filter(soda => soda.id !== id);
    this.setState({
      masterSodaList: newMasterSodaList,
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SodaForm 
      onNewSodaCreation={this.handleAddingNewSodaToList}/>
      buttonText = 'Return to Soda List';
    } else {
      currentlyVisibleState = <SodaList 
      sodaList={this.state.masterSodaList} 
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

export default SodaControl;