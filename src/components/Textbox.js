import React, {Component} from 'react';
import {form, FormGroup, FormControl } from 'react-bootstrap'


class Textbox extends Component {
	

	render() {
		return (
			<form className="form">
				<FormGroup
					controlId="formBasicText"					
				>					
					<FormControl
						type="text"						
						placeholder="0"						
					/>					
				</FormGroup>
			</form>
		);
	}
}

export default Textbox;