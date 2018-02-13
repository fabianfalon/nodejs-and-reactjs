
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './FormModal';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.submitProduct = this.submitProduct.bind(this);   
  }

  toggle() {
    this.props.toggle();
  }

  submitProduct() {
    const productForm = this.props.productForm
    if (productForm) {
      this.props.addProducts(productForm).then((res)=> {
        this.props.toggle();
      })
    }
  }
render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Product</ModalHeader>
          <ModalBody>
            <Form updateField={this.props.updateField}/>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" onClick={this.submitProduct}
              disabled={this.props.productForm.name ? false : true}>Accept</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;