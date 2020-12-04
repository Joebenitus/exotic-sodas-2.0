import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  const sodaStyling = {
    cursor: 'pointer'
  }
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSodaClicked(props.id)} style={sodaStyling}>
        <h3>{props.name}</h3>
        <h4>Flavor: {props.flavor}</h4>
        <p><em>Cans left: {props.cans}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  cans: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func
}

export default Soda;