import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import Wrapper from '../../Common/Wrapper';
import H1 from '../../Common/Typos/h1';
import H2 from '../../Common/Typos/h2';
import H3 from '../../Common/Typos/h3';
import H4 from '../../Common/Typos/h4';
import P from '../../Common/Typos/p';
import Button from '../../Common/Button';
import { config } from '../../../theme/config';
import {styles} from './style';

const {height, width} = Dimensions.get('window');

class CarScreen extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	carArry:[
			{
				title:'Car 4 seater',
				desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				src: require('../../../assets/images/car.png'),
				type:'Classic',
				charge:'4/Km',
				capacity:'4',
				storage: '2-3 Luggage'
			},
			{
				title:'Car 8 seater',
				desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				src: require('../../../assets/images/car-8-sitter.png'),
				type:'Wagon',
				charge:'4/Km',
				capacity:'8',
				storage: '2-5 Luggage'
			},
			{
				title:'Van 16 seater',
				desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				src: require('../../../assets/images/van.png'),
				type:'Minivan',
				charge:'8/Km',
				capacity:'16',
				storage: '5 Luggage'
			},
			{
				title:'Tourister Bus',
				desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				src: require('../../../assets/images/bus.png'),
				type:'Tourister Bus',
				charge:'12/Km',
				capacity:'52',
				storage: '20 Luggage'
			},
		],
		activeSlide: 0
	  };
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	_renderItem ({item, index}) {
		return (
		    <View style={{flex:1, width:'100%', paddingHorizontal:25}}>
			    <View style={styles.imageBlk}>
			    	<Image source={item.src} resizeMode='contain' style={styles.img} />
			    </View>
		        <H3 style={{color:config.white, paddingBottom:30}}>{ item.title }</H3>
		        <View style={styles.row}>
					<View style={styles.col}><H4 style={{color:config.white, paddingBottom:0}}>Type</H4></View>
					<View style={styles.col}><P>{item.type}</P></View>
		        </View>
		        <View style={styles.row}>
					<View style={styles.col}><H4 style={{color:config.white, paddingBottom:0}}>Charge</H4></View>
					<View style={styles.col}><P>{item.charge}</P></View>
		        </View>
		        <View style={styles.row}>
					<View style={styles.col}><H4 style={{color:config.white, paddingBottom:0}}>Capacity</H4></View>
					<View style={styles.col}><P>{item.capacity} Passenger</P></View>
		        </View>
		        <View style={styles.row}>
					<View style={styles.col}><H4 style={{color:config.white, paddingBottom:0}}>Luggage</H4></View>
					<View style={styles.col}><P>{item.storage}</P></View>
		        </View>
		        <Button label='Book now' onPress={this.handleSubmit} uppercase />
		    </View>
		);
	}

	handleSubmit(){
		
	}
	render() {
		const { carArry, activeSlide } = this.state;
		return (
			<View style={{flex:1}}>
				<ScrollView>
					<Wrapper style={{paddingHorizontal:0}}>
						<H1 style={{color:config.white, paddingHorizontal:25}}>Choose your Vehicle</H1>
						<View style={{position:'relative'}}>
							<Carousel
								ref={(c) => { this._carousel = c; }}
								data={carArry}
								renderItem={this._renderItem}
								sliderWidth={width}
								inactiveSlideScale={1}
								itemWidth={width}
								sliderHeight={height}
								itemHeight={height}
								onSnapToItem={(index) => this.setState({ activeSlide: index }) }
			                />
			                <Pagination
				              dotsLength={carArry.length}
				              activeDotIndex={activeSlide}
				              containerStyle={{paddingHorizontal:0, paddingVertical:0, position:'absolute', left:0, top:130, width:'100%' }}
				              dotStyle={{
				                  width: 10,
				                  height: 10,
				                  borderRadius: 5,
				                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
				              }}
				              inactiveDotStyle={{
				                  // Define styles for inactive dots here
				              }}
				              inactiveDotOpacity={0.4}
				              inactiveDotScale={0.6}
				            />
			            </View>
					</Wrapper>
				</ScrollView>
			</View>
		);
	}
}

export default CarScreen;