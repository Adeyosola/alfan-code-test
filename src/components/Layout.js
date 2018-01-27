import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap'
import Appbar from './Appbar'
import Sidebar from './Sidebar'
import Content from './Content'


class Layout extends Component {
	
  render() {
    return (
    	<Grid>
    		<Appbar/>
    		<Row className="show-grid">          
          <Col xs={12} md={3}>
          	<Sidebar/>	
		      </Col>
  				<Col xs={12} md={9}>
  					<Content/>
  				</Col>
        </Row>   				
		  </Grid>
    );
  }
}

export default Layout;