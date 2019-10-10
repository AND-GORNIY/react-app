// @flow

import React from 'react';
import CreateComponent1 from './CreateComponent1';
import CreateComponent2 from './CreateComponent2';
import './input_valid.css';

type Props = {};

type State = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  cardType?: string,
  styleError: string,
  validationResult?: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    cardType: undefined,
    styleError: 'off',
    validationResult: undefined,
  };

  handleInf0 = (
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    validationResult: boolean,
    styleError: string,
  ) => {
    this.setState({
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
      styleError,
    });
  };

  handleCardType = (cardType: string) => {
    this.setState({
      cardType,
    });
  };

  render() {
    const {
      cardNumber,
      firstName,
      lastName,
      cardType,
      expirationDate,
      cvv,
      validationResult,
      styleError,
    } = this.state;

    return (
      <>
        <CreateComponent1
          onSubmit={this.handleInf0}
          onCardtype={this.handleCardType}
        />
        <CreateComponent2
          cardNumber={cardNumber}
          firstName={firstName}
          lastName={lastName}
          cardType={cardType}
          expirationDate={expirationDate}
          cvv={cvv}
          validationResult={validationResult}
          styleError={styleError}
        />
      </>
    );
  }
}

export default App;
