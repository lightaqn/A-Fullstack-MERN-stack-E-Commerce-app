import React from 'react';
import Layout from '../../components/Layout';
import { Button, Jumbotron, Row, Col, Container } from 'react-bootstrap';
import "./style.css";
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {


  return (
    <Layout sidebar>

      {/* { <Jumbotron>
          <h1>Amalgam</h1>
          <div class="text-center jumbotron" size="lg">
            <h2>Your One Stop Confluence</h2>
          </div>
          <p>Established to deliver the best products, at the best price in the shortest time possible</p>
          <p><Button as="Input" type="button" size="sm" value="Explore" />{}</p>
      </Jumbotron> } */}
    </Layout>
  )

 }

export default Home