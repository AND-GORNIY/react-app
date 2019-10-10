import React from 'react';

class CreateComponent2 extends React.Component {
  state = {
    update: false,
    timerID: undefined,
    startAt: undefined,
  };

  startTimer = () => {
    const timerID = setTimeout(() => {
      this.setState({
        update: false,
        startAt: undefined,
      });
    }, 5000);

    this.setState({
      update: true,
      timerID,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    if (!this.state.update) {
      return this.startTimer();
    }
    clearTimeout(this.state.timerID);
    this.startTimer();
  }

  render() {
    const {
      cardNumber,
      firstName,
      lastName,
      cardType,
      validationResult,
      styleError,
    } = this.props;

    if (!this.state.update && !validationResult) {
      return null;
    } else if (this.state.update && !validationResult && styleError === 'on') {
      return <h4>Error</h4>;
    } else if (this.state.update && validationResult) {
      return (
        <>
          <h4> Card info: {cardNumber.substr(11, 4)}</h4>
          <h4> Name: {firstName} </h4>
          <h4> Surname: {lastName}</h4>
          <h4> CardType: {cardType}</h4>
        </>
      );
    } else {
      return null;
    }
  }
}

export default CreateComponent2;

//   componentDidUpdate(prevProps) {
//     if (
//       (prevProps.cardNumber !== this.props.cardNumber) &&
//       (prevProps.firstName !== this.props.firstName) &&
//       (prevProps.lastName !== this.props.lastName)
//     ) {
//       this.timerID = setTimeout(this.setState({ update: false }), 5000);
//     }

//     this.setState({update:true})

// //   }

//   //   componentWillUnmount() {
//   //     clearInterval(this.timerID);
//   // console.log(1)
//   //   }
//   componentDidUpdate(){
//     this.changeUpdate = () => {
//         this.setState({
//           update: !this.state.update,
//         });
//       };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (
//       (nextProps.cardNumber && this.props.cardNumber) ===
//       (nextProps.firstName && this.props.firstName) ===
//       (nextProps.lastName && this.props.lastName)
//     ) return false

//     return true
// }

//   changeUpdate = () => {
//     this.setState({
//       update: !this.state.update,
//     });
//   };

// render() {
//   const { cardNumber, firstName, lastName, cardType } = this.props;

//   if (!this.state.update || !(cardNumber && firstName && lastName)) {
//     return null;
//   } else {
//     return (
//       <>
//         <h4> Card info: {cardNumber.substr(11, 4)}</h4>
//         <h4> Name: {firstName} </h4>
//         <h4> Surname: {lastName}</h4>
//         <h4> CardType: {cardType}</h4>
//       </>
//     );
//   }
// }
// }

// render() {
//   const { cardNumber, firstName, lastName, cardType,styleError } = this.props;

//    if(this.state.update && (cardNumber !== undefined || firstName !== undefined || lastName !== undefined) && styleError === "on" ){
//     return(
//       <h4> Error</h4>
//     )
//     }
//   else if (!this.state.update || !(cardNumber && firstName && lastName)) {
//     return null;
//   }
//   else {
//     return (
//       <>
//         <h4> Card info: {cardNumber.substr(11, 4)}</h4>
//         <h4> Name: {firstName} </h4>
//         <h4> Surname: {lastName}</h4>
//         <h4> CardType: {cardType}</h4>
//       </>
//     );
//   }
// }
// }

// render() {
//   const { cardNumber, firstName, lastName, cardType, validationResult } = this.props;

//   if (!this.state.update && !validationResult) {
//     return null;
//   } else if(this.state.update && !validationResult){
//   return(
//     <h4>Error</h4>
//   )}
//   else if(
//     this.state.update && !validationResult){ return (
//       <>
//         <h4> Card info: {cardNumber.substr(11, 4)}</h4>
//         <h4> Name: {firstName} </h4>
//         <h4> Surname: {lastName}</h4>
//         <h4> CardType: {cardType}</h4>
//       </>
//     );
//     }
//   }
// }
