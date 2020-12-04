import React from 'react';
import PropTypes from 'prop-types';

function SodaDetail(props) {
  const { soda, onClickingDelete, onClickingSell } = props;

  return (
    <React.Fragment>
      <h2>Soda Detail</h2>
      <h3>Name: {soda.name}</h3>
      <h4>Flavor: {soda.flavor}</h4>
      <p>Cans left: {soda.cans}</p>
      <button onClick={() => onClickingDelete(soda.id) }>Remove From Soda List</button>
      <button onClick={() => onClickingSell(soda.id) }>Sell!</button>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func
}

export default SodaDetail;