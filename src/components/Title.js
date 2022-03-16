import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title({ title }) {
  return <TitleContainer>{title}</TitleContainer>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

const TitleContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  height: 20rem;
  position: sticky;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #bfbfbf;
  background-color: rgba(255, 255, 255, 0);
`;
