import React, {Component} from 'react'
import { Range } from 'rc-slider';
import '../styles/App.css';
import 'rc-slider/assets/index.css';



class SliderComp extends Component {

  render() {
    return (
    	<div className= "SliderComp">

    		<Range
    			defaultValue={[0, 100]}
    			trackStyle={[{ backgroundColor: '#af1f29' }]}
        		handleStyle={[
        			{ backgroundColor: 'white' }
        		]}   		
    		/>

		</div>
    );
  }
}
export default SliderComp;
