import React, { Component } from 'react';
import { Button, Form, Input, Label } from './Form.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  clearStateName = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form>
          <Label htmlFor="">
            Name:
            <Input
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. 
For example Adrian, Jacob Mercer, Charles de Batz de Castelmore 
d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="">
            Number:
            <Input
              value={number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can 
start with +"
              required
            />
          </Label>
          <Button
            type="button"
            onClick={() => {
              this.props.addContact(
                name,
                number,
                this.clearState,
                this.clearStateName
              );
            }}
          >
            Add contact
          </Button>
        </Form>
      </>
    );
  }
}
