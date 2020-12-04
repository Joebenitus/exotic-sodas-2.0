import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';

function SodaList(props) {
  return (
    <React.Fragment>
      <h2>Soda List</h2>
      <hr/>
      {Object.values(props.sodaList).map((soda) => 
        <Soda
          whenSodaClicked={props.onSodaSelection}
          name={soda.name}
          flavor={soda.flavor}
          cans={soda.cans}
          id={soda.id}
          key={soda.id}/>
      )}
      
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.object,
  onSodaSelection: PropTypes.func
}

export default SodaList;