import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';

const SinglePageStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  h1, h3{
    margin: 0;
  }
`;

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      ready: 'initial',
    }
  }
  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    axios({
      method: 'get',
      url: `${process.env.HOST}/Cuisines/${id}`,
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    }).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <SinglePageStyle>
          <Container>
            <Grid>
              <Column>
              </Column>
              <Column>
                <section>
                  <h1>Recipe Title</h1>
                </section>
              </Column>
            </Grid>
            <Grid>
              <Column>
                <img src="http://placehold.it/200" alt="recipe food" />
              </Column>
              <Column>
                <section>
                <h3>Directions</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ipsum consectetur recusandae nesciunt hic cupiditate dolore perspiciatis culpa repellendus.</p>
                </section>
              </Column>
            </Grid>
          </Container>
        </SinglePageStyle>
        <Footer />
      </Fragment>
    );
  }
}

export default SinglePage;
