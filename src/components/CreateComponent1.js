// @flow
import React from 'react';
import CreateComponent3 from './CreateComponent3';

type Props = {|
  onSubmit: (
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
    param7: boolean,
  ) => void,
  onCardtype: (param1: string) => void,
|};

type State = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  styleError: string,
  validationResult?: boolean,
};

class CreateComponent1 extends React.Component<Props, State> {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    styleError: 'off',
    validationResult: false,
  };

  hangleChange = e => {
    const { name } = e.target;
    const { value } = e.target;

    const { cardNumber, cvv, expirationDate, firstName, lastName } = this.state;

    this.setState({
      [name]: value,
      styleError: 'off',
      validationResult: this.checkFields(
        cardNumber,
        cvv,
        expirationDate,
        firstName,
        lastName,
      ),
    });
  };

  handleClick = () => {
    const {
      cardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      validationResult,
      styleError,
    } = this.state;

    this.setState({
      styleError: 'on',
      validationResult: this.checkFields(
        cardNumber,
        cvv,
        expirationDate,
        firstName,
        lastName,
      ),
    });

    this.props.onSubmit(
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
      styleError,
    );
  };

  preventDefault = e => {
    e.preventDefault();
  };

  checkDate(expirationDate) {
    if (
      !isNaN(expirationDate.slice(0, 2)) &&
      +expirationDate.slice(0, 2) < 13 &&
      !isNaN(expirationDate.substr(3, 2)) &&
      expirationDate.length === 5
    )
      return false;

    return true;
  }

  checkFields = (cardNumber, cvv, expirationDate, firstName, lastName) => {
    return (
      cardNumber.length === 16 &&
      (cvv.length < 5 && cvv.length > 2) &&
      !this.checkDate(expirationDate) &&
      firstName.length > 2 &&
      lastName.length > 3
    );
  };

  render() {
    const {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      styleError,
    } = this.state;

    return (
      <>
        <div>
          <form onSubmit={this.preventDefault} className="form">
            Card Info
            <label>
              Ваш номер кредитной карты:
              <input
                type="tel"
                name="cardNumber"
                required
                onChange={this.hangleChange}
                maxLength="16"
                placeholder="****-****-****-****"
                className={`${styleError} ${
                  cardNumber.length < 16 ? 'true' : ''
                } `}
              ></input>
            </label>
            <label>
              Карта годна до
              <input
                type="numder"
                name="expirationDate"
                maxLength="5"
                pattern="([0-9]{2}[/]?){2}"
                required
                onChange={this.hangleChange}
                placeholder="**/**"
                className={`${styleError} ${
                  this.checkDate(expirationDate) ? 'true' : ''
                } `}
              />
            </label>
            <label>
              Введите CVV
              <input
                type="tel"
                name="cvv"
                maxLength="4"
                required
                placeholder="***"
                onChange={this.hangleChange}
                className={`${styleError} ${
                  cvv.length > 5 || cvv.length < 2 ? 'true' : ''
                } `}
              />
            </label>
            <label>
              Введите Имя
              <input
                type="text"
                name="firstName"
                maxLength="16"
                required
                onChange={this.hangleChange}
                className={`${styleError} ${
                  firstName.length < 2 ? 'true' : ''
                } `}
              />
            </label>
            <label>
              Введите Фамилию
              <input
                type="text"
                name="lastName"
                maxLength="16"
                required
                onChange={this.hangleChange}
                className={`${styleError} ${
                  lastName.length < 2 ? 'true' : ''
                } `}
              />
            </label>
            <input
              type="submit"
              onClick={this.handleClick}
              value="Зарегистрироваться"
            />
          </form>
        </div>
        <CreateComponent3
          onCardtype={this.props.onCardtype}
          cardNumber={cardNumber}
        />
      </>
    );
  }
}

export default CreateComponent1;
