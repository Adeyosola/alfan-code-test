import React, {Component} from 'react'
import SliderComp from './SliderComp.js'
import {form, Form, FormGroup, FormControl } from 'react-bootstrap'

import Slider from 'rc-slider'
import Checkbox from 'material-ui/Checkbox'
import FontAwesome from 'react-fontawesome'
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/App.css';


class Sidebar extends Component {
  render() {
    return (
      <div className="Slidebar">
        <div className="SliderComp">
          <h4> General Search Criteria</h4>
          <h5>Total Followers</h5>
          <div>
            
            <Form className="form-inline">
              <FormGroup controlId="formBasicText" className="form-group">         
                <FormControl
                  type="text"           
                  placeholder="30%"           
                /> 
                <FormControl 
                  type="text"           
                  placeholder="5M+"           
                />                       
              </FormGroup>
            </Form>
          </div>
          <SliderComp/>
          <h5>Vertical</h5>
          <select multiple={true} style={{width: '200px'}} >
            <option value="Automotive">Automotive</option>
            <option value="Luxury">Luxury</option>
            <option value="Tourism">Tourism</option>          
            <option value="Food">Food</option>
            <option value="Photography">Photography</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <div className="SliderComp">
          <h5> Audience Gender (last 30 days)</h5>
          <FontAwesome
            name='ban'
            size='2x'          
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#af1f29', margin:'20px' }}
          />
          <FontAwesome
            name='male'
            size='2x'          
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  margin:'20px' }}
          />
          <FontAwesome
            name='female'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',  margin:'20px' }}
          />
          <Form className="form-inline">
              <FormGroup controlId="formBasicText">         
                <FormControl
                  type="text"           
                  placeholder="30%"           
                /> 
                       
              </FormGroup>
            </Form>
          <Slider
            trackStyle={[{ backgroundColor: '#af1f29' }]}
            defaultValue = {30}
            handleStyle={[
              { backgroundColor: 'white' }, 
              {borderColor: '#ccc'},              
            ]}  
          />
        </div>

        <div className='SliderComp'>

          <h5>Channel Type</h5>
          <Checkbox
            label="Influencer"
            checked= {false}
          />
          <Checkbox
            label="Publisher"
            checked= {false}
          />
          <Checkbox
            label="Artist"
            checked= {false}
          />
          <Checkbox
            label="Brand"
            checked= {false}
          />
          <Checkbox
            label="Content Creator"
            checked= {false}
          />

          <h5>Creator Gender</h5>
          <Checkbox
          label="Male"
          checked= {false}
          />
          <Checkbox
            label="Female"
            checked= {false}
          />
        </div>

        <div className='SliderComp'>

          <h5>Posts in last 30 days</h5>
          <Form inline className="form">
              <FormGroup controlId="formBasicText">         
                <FormControl
                  type="text"           
                  placeholder="0"           
                /> 
                <FormControl
                  type="text"           
                  placeholder="30"           
                />          
              </FormGroup>
            </Form>
          <SliderComp/>

          <h4>Youtube Search Criteria</h4>
          <h5>Subcribers</h5>
          <Form inline className="form">
              <FormGroup controlId="formBasicText">         
                <FormControl
                  type="text"           
                  placeholder="0"           
                /> 
                <FormControl
                  type="text"           
                  placeholder="10M"           
                />          
              </FormGroup>
            </Form>
          <SliderComp/>

          <h5>Views in Last 30 days</h5>
          <Form inline className="form">
              <FormGroup controlId="formBasicText">         
                <FormControl
                  type="text"           
                  placeholder="0"           
                /> 
                <FormControl
                  type="text"           
                  placeholder="100M"           
                />          
              </FormGroup>
            </Form>
          <SliderComp/>
          <br/>

          <RaisedButton 
            label="Search" 
            backgroundColor="#af1f29"
            buttonStyle={{ borderRadius: 15 }}
            style={{ borderRadius: 15 }}
            labelColor={'#FFFFFF'}
          />
        </div>


        
      </div>
    );
  }
}
export default Sidebar;