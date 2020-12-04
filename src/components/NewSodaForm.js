import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function SodaForm(props) {
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    const { target } = event
    props.onNewSodaCreation({
      name: target.name.value,
      flavor: target.flavor.value,
      cans: target.cans.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSodaFormSubmission}
        buttonText='Add Soda'/>
    </React.Fragment>
  );
}

SodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
}

export default SodaForm;