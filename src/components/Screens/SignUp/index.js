import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Wrapper from '../../Common/Wrapper';
import { config } from '../../../theme/config';
import TextBox from '../../Common/FormElements/TextBox';
import H1 from '../../Common/Typos/h1';
import P from '../../Common/Typos/p';
import Button from '../../Common/Button';

class SignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName:'',
			lastName:'',
			mobileNo:'',
			email:'',
			password:''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(){

	}
	render() {
		const {firstName, lastName, mobileNo, email, password } = this.state;
		return (
			<ScrollView contentContainerStyle={{flex:1}}>
				<Wrapper style={{ alignItems:'center',}}>
					<View style={{alignItems: 'flex-start', width:'100%'}}>
						<H1 style={{color:config.white, marginBottom:15}}>New account</H1>
					</View>
					<KeyboardAwareScrollView>
						<View style={{alignItems:'flex-start', width:'100%'}}>
							<TextBox 
							  value={firstName}
					          placeholder='First name'
					          name='firstName'
					          onChange={(value) => this.setState({firstName: value})}
				              keyboardType={'default'}
					        />
					        <TextBox 
							  value={lastName}
					          placeholder='Last name'
					          name='lastName'
					          onChange={(value) => this.setState({lastName: value})}
				              keyboardType={'default'}
					        />
							<TextBox 
							  value={email}
					          placeholder='example@taxi.com'
					          name='email'
					          onChange={(value) => this.setState({email: value})}
				              keyboardType={'email-address'}
					        />
					        <TextBox 
							  value={mobileNo}
					          placeholder='Mobile number'
					          name='mobileNo'
					          onChange={(value) => this.setState({mobileNo: value})}
				              keyboardType={'phone-pad'}
					        />
					        <TextBox 
							  value={password}
					          placeholder='Password'
					          name='password'
					          onChange={(value) => this.setState({password: value})}
				              secureTextEntry={true}
					        />
					        <Button label='Submit' onPress={this.handleSubmit} uppercase />
				        </View>
					</KeyboardAwareScrollView>
	            </Wrapper>
            </ScrollView>
		);
	}
}

export default SignUpScreen;