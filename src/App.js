import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome'
import SignUp from './components/signup'
import Overview from './components/overview'
import Thanks from './components/thanks'
import Header from './components/header'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.handleName = this.handleName.bind(this);
    this.handleNpi = this.handleNpi.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleEmailConfirm = this.handleEmail.bind(this);
    this.emailsMatch = this.emailsMatch.bind(this);

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);

    this.state={
      fullName:"",
      npiNumber:"",
      businessAddress:"",
      phone:"",
      email:"",
      confirmEmail:"",

      welcome: true,
      signup: false,
      overview: false,
      submitted: false,
    }
  }

  emailsMatch(){
    return this.state.email === this.state.confirmEmail ? true : false;
  }
  handleName(event){
    this.setState({fullName: event.target.value})
  }
  handleNpi(event){
    this.setState({npiNumber: event.target.value})
  }
  handleAddress(event){
    this.setState({businessAddress: event.target.value})
  }
  handlePhone(event){
    this.setState({phone: event.target.value})
  }
  handleEmail(event){
    this.setState({email: event.target.value})
  }
  handleEmailConfirm(event){
    this.setState({confirmEmail: event.target.value})
  }
  handleRegisterClick(event){
    this.setState({welcome:null, signup: true});
  }
  handleNext(event) {
    this.setState({signup:null, overview:true});
  }
  handleSubmit(event){
    this.setState({overview:null, submitted:true});
  }
  handleRestart(event){
    this.setState({submitted:null, welcome:true});
    this.setState({
      fullName:"",
      npiNumber:"",
      businessAddress:"",
      phone:"",
      email:"",
      confirmEmail:"",
    })
  }
  handleGoBack(event){
    this.setState({overview:null, signup:true});
  }
  render(){

    let currentPage
    if(this.state.signup){
      currentPage = <SignUp handleNext={this.handleNext}
                      handleName = {this.handleName}
                      handleEmail = {this.handleEmail}
                      handleEmailConfirm={this.handleEmailConfirm}
                      handleNpi = {this.handleNpi}
                      handleAddress = {this.handleAddress}
                      handlePhone = {this.handlePhone}
                      emailsMatch = {this.emailsMatch}/>
    }
    else if(this.state.overview){
      currentPage = <Overview name={this.state.fullName}
                        npiNumber={this.state.npiNumber}
                        email={this.state.email}
                        businessAddress={this.state.businessAddress}
                        phone={this.state.phone}
                        handleSubmit={this.handleSubmit}
                        handleGoBack={this.handleGoBack}/>
    }
    else if(this.state.submitted){
      currentPage = <Thanks handleRestart={this.handleRestart}/>
    }
    else currentPage = <Welcome handleRegisterClick={this.handleRegisterClick}/>

    return (
      <div className="App">
          <Header/>
        {currentPage}
      </div>
    );
  }
}

export default App;
