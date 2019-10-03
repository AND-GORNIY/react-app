import React from 'react';

class CreateComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      firstName: '',
      lastName: '',
      style: undefined,
    };
  }

  hangleChange = e => {
    const { name } = e.target;
    const { value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    this.check();
    this.setState({
      style: this.check()
    })
  };

  check(cardNumber, expirationDate, cvv, firstName, lastName, style) {
    return this.state.cardNumber.length === 16 ? true : false;
  }

  preventDefault = e => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={this.preventDefault}>
            Card Info<br></br>
            <label>
              Ваш номер кредитной карты:
              <input
                type="tel"
                name="cardNumber"
                onChange={this.hangleChange}
                maxLength="16"
                minLength="16"
                placeholder="****-****-****-****"
                style={
                  this.state.style
                    ? { borderColor: 'red' }
                    : { borderColor: 'black' }
                }
              />
            </label>
            <br></br>
            <label>
              Карта годна до
              <input
                type="numder"
                name="expirationDate"
                onChange={this.hangleChange}
                placeholder="**/**"
              />
            </label>
            <br></br>
            <label>
              Введите CVV
              <input type="number" name="cvv" onChange={this.hangleChange} />
            </label>
            <br></br>
            <label>
              Введите Имя
              <input
                type="text"
                name="firstName"
                onChange={this.hangleChange}
              />
            </label>
            <br></br>
            <label>
              Введите Фамилию
              <input type="text" name="lastName" onChange={this.hangleChange} />
            </label>
            <br></br>
            <input
              type="submit"
              onClick={this.handleClick}
              value="Зарегистрироваться"
            />
            <br></br>
          </form>
        </div>
      </>
    );
  }
}

export default CreateComponent1;
