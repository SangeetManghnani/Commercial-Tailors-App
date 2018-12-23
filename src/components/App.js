import '../assets/css/App.css';
import React, { Component } from 'react';
import AppTopBar from './TopBar/TopBar.jsx';
import CustomerList from './CustomerList/CustomerList.jsx';
import { getCollections } from '../Utils/firestoreHelpers';
import  CustomerForm  from './CustomerForm/CustomerForm.jsx';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'Commercial Tailors',
      customers: [],
      currentPage: 'customerList'
    }

    getCollections('customers').then((itemList) => {
      this.setState({
        customers: itemList,
      });
    });

    this.setPage = this.setPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  setPage(page){
   this.setState({
     currentPage: page,
   })
  }

  renderPage(){
    switch (this.state.currentPage) {
      case 'customerList':
        return(<CustomerList customers={this.state.customers} isLoading={this.state.customers.length <=0} addCustomer={(page)=> this.setPage(page)}/>);
        break;
      case 'customerForm':
        return(<CustomerForm customers={this.state.customers} />);
        break;
      case 'customerDetails':
        return(<CustomerList customers={this.state.customers} />);
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
       <AppTopBar title={this.state.title}/>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
