import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import alfan from '../alfan.png';


class Appbar extends Component {
  render() {
    return (
    	<div>
    		<Navbar>
				  <Navbar.Header>
            <img src={alfan} className="App-logo" alt="" />					
						<a href="#home"> alfan</a>
					</Navbar.Header>	
          <Navbar.Text >
           <p style={{marginLeft: '300px', fontSize: '30px'}}>Influencer Finder</p>
          </Navbar.Text>	
			  </Navbar>
    	</div>    	    
    );
  }
}
export default Appbar;

