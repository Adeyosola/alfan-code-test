import React, { Component } from 'react';
import {Card } from 'material-ui/Card';
import {Row, Col, DropdownButton, MenuItem} from 'react-bootstrap'
import '../styles/App.css';
import FontAwesome from 'react-fontawesome'
import { barb, cat, girl, dog, boy, dash, friends, room, spain, canada, sweden, us, gb, france } from '../img/'


class Content extends Component {
  render() {
    return (
    	<div className="Slidebar">
    		<div className="inset">
	    		<p className="Sort">
	    			Sort by: 
	    			<DropdownButton title={'Peg Score'}> 
					    <MenuItem eventKey="1">Peg Score</MenuItem>
					</DropdownButton>
				</p>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={barb} className="CardMedia" alt="" />	
		    				</div>						
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>elrubiusOMG</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={spain} alt="" /> Spain | Comedy
									<br/>
									6.5m Avg views | 25.6m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={girl} className="CardMedia" alt=""/>	
		    				</div>					
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>VanossGaming</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									4.2m Avg views | 21.4m Subscribers
								</p>	
							   
						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dog} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>PewDiePie</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={sweden} alt="" /> Sweden | Gaming
									<br/>
									3.5m Avg views | 57.2m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={boy} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>Squeezie</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={france} alt="" /> France | Gaming
									<br/>
									5.1m Avg views | 20.1m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={room} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>JennaMarbles</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>	
							   
						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={girl} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>Markiplier</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Gaming
									<br/>
									21m Avg views | 12m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={barb} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>nigahiga</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									5.1m Avg views | 20.1m Subscribers
								</p>	
						    	     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dog} className="CardMedia" alt="" />	
		    				</div>							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>WolfieRaps</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>	
							   
						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dash} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>JennaMarbles</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>							     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={cat} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>VanossGaming</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={spain} alt="" /> Spain | Gaming
									<br/>
									4.2m Avg views | 21.4m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dash} className="CardMedia" 
									alt="" 									
							    />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>PewDiePie</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={gb} alt="" /> Britain| Gaming
									<br/>
									3.5m Avg views | 57.2m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={friends} className="CardMedia" alt=""/>	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>Markiplier</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Gaming
									<br/>
									21m Avg views | 12m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={friends} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>WolfieRaps</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>			     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={room} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>VanossGaming</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									4.2m Avg views | 21.4m Subscribers
								</p>		
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={cat} className="CardMedia" alt=""  />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>elrubiusOMG</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={spain} alt="" /> Spain | Comedy
									<br/>
									6.5m Avg views | 25.6m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={boy} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>nigahiga</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									5.1m Avg views | 20.1m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={room} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>PewDiePie</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={sweden} alt="" /> Sweden | Gaming
									<br/>
									3.5m Avg views | 57.2m Subscribers
								</p>	
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={barb} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>JennaMarbles</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>					     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={girl} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>nigahiga</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									5.1m Avg views | 20.1m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dog} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>VanossGaming</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									4.2m Avg views | 21.4m Subscribers
								</p>
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={cat} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>JennaMarbles</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>					     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={dash} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>nigahiga</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Comedy
									<br/>
									5.1m Avg views | 20.1m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={friends} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>elrubiusOMG</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={spain} alt="" /> Spain | Comedy
									<br/>
									6.5m Avg views | 25.6m Subscribers
								</p>	
							   
						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={boy} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
							    <p className="textTitle">
							    	<strong>VanossGaming</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									4.2m Avg views | 21.4m Subscribers
								</p>

						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
	    		<br/>
	    		<Row>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={room} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>Markiplier</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={us} alt="" /> USA | Gaming
									<br/>
									21m Avg views | 12m Subscribers
								</p>				     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={cat} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>WolfieRaps</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={canada} alt="" /> Canada | Gaming
									<br/>
									8.8m Avg views | 23.7m Subscribers
								</p>
							   
						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    			<Col xs={12} md={4}>
	    				<Card>
		    				<div className="imgDiv">
		    					<img src={girl} className="CardMedia" alt="" />	
		    				</div>						
							
						    <div className="textDiv">
						    	<p className="textTitle">
							    	<strong>elrubiusOMG</strong>
							    	<FontAwesome
							          name='check-circle'
							          size='1x'
							          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , color:'gray'}}
							        />
							        <br/>
									<img src={spain} alt="" /> Spain | Comedy
									<br/>
									6.5m Avg views | 25.6m Subscribers
								</p>						     
						    </div>	
						    <div style={{clear: 'both'}}>
						    </div>				    		
	    				</Card>
	    			</Col>
	    		</Row>
    		</div>
    		

  	 	</div>
    );
  }
}

export default Content;