import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Actions from './Actions';
export default class ProductList extends Component {

  constructor(props) {
    super(props);
    this.onChanges = this.onChanges.bind(this);
  }

  onChanges(state) {
    console.log('estate')
/*     let sortField = this.props.sortField;
    let sortDirection = this.props.sortDirection;
    if (state.sorted[0]) {
        sortField = state.sorted[0].id;
        sortDirection = state.sorted[0].desc === true ? 'desc' : 'asc';
    }

    const pages = state.page;
    const limit = state.pageSize;

    this.props.getProducts(); */
  }

render() {
    const columns = [{
      Header: 'ID',
      accessor: 'productId',
      maxWidth: 70
    }, {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Description',
      accessor: 'description'
    }, {
      Header: 'Price',
      accessor: 'price',
      maxWidth: 80      
    }, {
      Header: 'Stock',
      accessor: 'stock',
      maxWidth: 70
    }, {
      Header: 'Actions',
      id: 'actions',
      maxWidth: 200,
      accessor: (i) =>
          <Actions item={i} />
    }];
    return (
        <div>
            <hr /><br />
            <div className="table-responsive">
                <ReactTable
                  noDataText="No information to display!"
                  loadingText="Loading data ..."
                  data={this.props.products}
                  columns={columns}
                  defaultPageSize={5}
                  pages={this.props.pages}
                  onFetchData={(state, instance) => { this.onChanges(state, instance); }}
                  manual
                  pageSizeOptions={[2, 9, 15]}
                />
            </div>
        </div>
    )
  }
}