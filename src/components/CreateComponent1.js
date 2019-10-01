import React from 'react'

class CreateComponent1 extends React.Component {
    state={
        buttonclick:true
    }
    render(){
        return(
            <div>
                <form >
                    <label> Ваш номер кредитной карты: <input type="number" name="cardNumber" placeholder={this.handleClick.buttonclick ? 'Ошибка' : 'Все верно'}/> </label><br></br>
                    <label> Карта годна до <input type="numder" name="expirationDate" placeholder={this.handleClick.buttonclick ? 'Ошибка': 'Все верно'} /></label><br></br> 
                    <label> Введите CVV <input type="text" name="cvv" placeholder={this.handleClick.buttonclick ? 'Ошибка' : 'Все верно'}/></label><br></br>                  
                    <input type="submit" onClick={this.handleClick} value= "Зарегистрироваться" /><br></br>
                </form>
            </div>
        )
    }
    handleClick = () =>{
        this.setState({
            buttonclick: !this.state.buttonclick
        })
    }
}



export default CreateComponent1