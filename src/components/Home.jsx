import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  color: red;
`;

// Stateless Functional Component
const Home = () => (
  <HomeStyle>
    <h1>Welcome to Recipe Project</h1>
  </HomeStyle>
);

export default Home;
