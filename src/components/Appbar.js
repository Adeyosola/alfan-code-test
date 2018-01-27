import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import alfan from '../alfan.png';


class Appbar extends Component {
  render() {
    return (
    	<div>
    		<Navbar>
				  <Navbar.Header>
            <img src={alfan} className="App-logo" />					
						<a href="#home"> alfan</a>
					</Navbar.Header>	
          <Navbar.Text >
           Influencer Finder
          </Navbar.Text>	
			  </Navbar>
    	</div>    	    
    );
  }
}
export default Appbar;

