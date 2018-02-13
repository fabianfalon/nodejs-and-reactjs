import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormModal extends React.Component {
  render() {
      return (
        <Form>
          <FormGroup>
            <Label for="formName">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Insert name" 
              onChange={(e) => { e.preventDefault(); this.props.updateField('name', e.target.value); }}/>
          </FormGroup>
          <FormGroup>
            <Label for="formDescription">Description</Label>
            <Input type="textarea" name="text" id="description"
              onChange={(e) => { e.preventDefault(); this.props.updateField('description', e.target.value); }} />
          </FormGroup>
        <FormGroup>
            <Label for="formPrice">Price</Label>
            <Input type="text" name="Price" id="price" placeholder="Insert Price"
              onChange={(e) => { e.preventDefault(); this.props.updateField('price', e.target.value); }} />
        </FormGroup>
        <FormGroup>
            <Label for="formStock">Stock</Label>
            <Input type="text" name="Stock" id="stock" placeholder="Insert Stock"
              onChange={(e) => { e.preventDefault(); this.props.updateField('stock', e.target.value); }} />
        </FormGroup>
        </Form>
      );
  }
}