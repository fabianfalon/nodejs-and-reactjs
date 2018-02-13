import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ProductList from './components/Products/ProductList';
import Modal from './components/Products/Modal';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as productsActions from './actions/products'
import { Button, Container, Row, Col } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false 
    }
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadProducts();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>All products</h1>
          <Row>
            <Col xs="1">
              <Button id={'agregar'}
                onClick={this.toggle}
                color="primary" size="sm">Add new product</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <ProductList
                products={this.props.products.products}
                pages={2}
                getProducts={this.props.actions.loadProducts}
                settingStates={this.settingStates}
              />
            </Col>
          </Row>
          <Modal modal={this.state.modal}
            toggle={this.toggle}
            updateField={this.props.actions.updateField}
            addProducts={this.props.actions.addProducts}
            productForm={this.props.products.productForm}
            loadProducts={this.props.actions.loadProducts}
            toggle={this.toggle}/>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))