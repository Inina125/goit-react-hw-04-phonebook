import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Title } from './Filter.styled';

const Filter = ({ filter, setFilter }) => {
  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Field type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
