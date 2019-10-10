import React from 'react';

class CreateComponent3 extends React.PureComponent {
  checkCardType = cardNumber => {
    let lastFourSymbol = Number(cardNumber.substr(11, 4));
    let type;
    if (lastFourSymbol < 2000) {
      type = 'VISA';
    } else {
      type = 'MASTERCARD';
    }
    this.props.onCardtype(type);
  };

  render() {
    const cardNumber = this.props.cardNumber;
    if (cardNumber !== undefined && cardNumber.length === 16) {
      this.checkCardType(this.props.cardNumber);
    }

    return null;
  }
}

export default CreateComponent3;
