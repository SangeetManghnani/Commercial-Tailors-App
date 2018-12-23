import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import CustomerTable from './CustomerTable.jsx';


class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const list = [];
    this.props.customers.map((customer, index) => {
      list.push(<li key={index + 1}>{customer.name}</li>);
    });

    return (list);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.isLoading ? <CircularProgress className="progress" color="secondary" /> :
        <div>
          <div className="customer-list">
            <CustomerTable />
            {/* <ul>{this.renderList()}</ul> */}
          </div>
          <Button variant="fab" color="primary" aria-label="Edit" className="button" onClick={() => this.props.addCustomer('customerForm')}>
          +
          </Button>
        </div>
      }
      </div>
    );
  }
}

export default CustomerList;
