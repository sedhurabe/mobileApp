import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Wrapper from '../../Common/Wrapper';
import { config } from '../../../theme/config';
import TextBox from '../../Common/FormElements/TextBox';
import Button from '../../Common/Button';

class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTrigger = this.handleTrigger.bind(this);
	}
	handleSubmit(){
		l
	}
	handleTrigger(){
	   Actions.signup();
	}
	render() {
		const { email, password } = this.state;
		return (
			<ScrollView contentContainerStyle={{flex:1}}>
				<Wrapper style={{ alignItems:'center'}}>
					<KeyboardAvoidingView behavior='position' enabled>
						<View style={{alignItems: 'center', width:'100%'}}>
							<Image source={require('../../../assets/images/logo.png')} resizeMode='contain' style={{ width:150, height:150, marginBottom:33}} />
						</View>
						<View style={{alignItems: 'flex-start', width:'100%'}}>
							<TextBox 
							  value={email}
					          placeholder='example@taxi.com'
					          name='email'
					          onChange={(value) => this.setState({email: value})}
				              keyboardType={'email-address'}
					        />
					        <TextBox 
							  value={password}
					          placeholder='Password'
					          name='password'
					          onChange={(value) => this.setState({password: value})}
				              secureTextEntry={true}
					        />
					        <Button label='LogIn' onPress={this.handleSubmit} uppercase />
				        </View>
					</KeyboardAvoidingView>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop:15, width:'100%'}}>
						<View style={{ justifyContent: 'flex-start'}}>
							<TouchableOpacity>
								<Text style={{fontSize:18, color:config.white}}>I forgot</Text>
							</TouchableOpacity>
						</View>
						<View style={{ justifyContent: 'flex-end'}}>
							<TouchableOpacity onPress={this.handleTrigger}>
								<Text style={{fontSize:18, color:config.white}}>Signup</Text>
							</TouchableOpacity>
						</View>
					</View>
	            </Wrapper>
            </ScrollView>
		);
	}
}

export default WelcomeScreen;