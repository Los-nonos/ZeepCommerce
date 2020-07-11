import React from 'react';
import CustomButton from '../../Atoms/CustomButtons/Button';
import { env } from '../../../../config/environment';

class MercadoPagoLayout extends React.Component {
  doSubmit = false;

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      paymentMethodId: '',
      installmentsOptions: [],
    }
  }

  componentDidMount() {
    if(!this.isServer()) {
      window.Mercadopago.setPublishableKey(env('MERCADO_PAGO_KEY', 'APP_USR-854382a2-e53a-4386-8cc4-67c47ed02284'));
      window.Mercadopago.getIdentificationTypes();
    }

  }

  isServer = () => {
    return window === undefined;
  }

  doPay = (event) => {
    event.preventDefault();
    if(!this.doSubmit){
      let $form = document.querySelector('#pay');

      window.Mercadopago.createToken($form, this.sdkResponseHandler);

      return false;
    }
  };

  sdkResponseHandler = (status, response) => {
    if (status !== 200 && status !== 201) {
      alert("verifique la información proporcionada");
    }else{
      this.setState({token: response.id});
      this.doSubmit=true;
    }
  };

  getAmount = () => {
    return 300;
  }

  guessPaymentMethod = (event) => {
    const cardNumber = event.target.value;
    if (cardNumber.length >= 6) {
      let bin = cardNumber.substring(0,6);
      window.Mercadopago.getPaymentMethod({
        "bin": bin
      }, this.setPaymentMethod);
    }
  };

  setPaymentMethod = (status, response) => {
    if (status === 200) {
      let paymentMethodId = response[0].id;
      this.setState({ paymentMethodId });
      this.getInstallments();
    } else {
      alert('Error, número de tarjeta inválido');
    }
  }

  getInstallments = () => {
    if(this.isServer()) {
      return;
    }

    let options = [];
    window.Mercadopago.getInstallments({
      "payment_method_id": this.state.paymentMethodId,
      "amount": this.getAmount(),
    }, function (status, response) {
      console.log(status);
      console.log(response);
      if (status === 200) {
        response[0].payer_costs.forEach( installment => {
          options.push({
            installments: installment.installments,
            recommended_message: installment.recommended_message,
          });
        });
      } else {
        alert(`installments method info error: ${response}`);
      }
    });

    this.setState({installmentsOptions: options});
  }

  handleSubmit = (e) => {
    this.state({[e.target.name]: e.target.value });
  }

  listOptionsInstallments = () => {
    console.log(this.state.installmentsOptions);
    return this.state.installmentsOptions.map(option => {
      return (
        <option value={option.installments}>
          {option.recommended_message}
        </option>
      )
    });
  }

  render() {
    return (
      <div>
        <fieldset>
          <p>
            <label htmlFor="description">Descripción</label>
            <input type="text" name="description" id="description" value={this.props.cart.description}/>
          </p>
          <p>
            <label htmlFor="transaction_amount">Monto a pagar</label>
            <input name="transaction_amount" id="transaction_amount" readOnly={true} value={this.getAmount()}/>
          </p>
          <p>
            <label htmlFor="cardNumber">Número de la tarjeta</label>
            <input
               type="text"
               id="cardNumber"
               data-checkout="cardNumber"
               onselectstart={() => {
                 return false;
               }}
               onPaste={() => {
                 return false;
               }}
               onCopy={() => {
                 return false;
               }}
               onCut={() => {
                 return false;
               }}
               onDrag={() => {
                 return false;
               }}
               onDrop={() => {
                 return false;
               }}
               autoComplete='off'
               onChange={this.guessPaymentMethod}
               onKeyUp={this.guessPaymentMethod}
            />
          </p>
          <p>
            <label htmlFor="cardholderName">Nombre y apellido</label>
            <input type="text" id="cardholderName" data-checkout="cardholderName"/>
          </p>
          <p>
            <label htmlFor="cardExpirationMonth">Mes de vencimiento</label>
            <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" onselectstart={() => {return false}}
                   onPaste={() => {return false}} onCopy={() => {return false}} onCut={() => {return false}} onDrag={() => {return false}}
                   onDrop={() => {return false}} autoComplete='off'/>
          </p>
          <p>
            <label htmlFor="cardExpirationYear">Año de vencimiento</label>
            <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" onselectstart={() => {return false}}
                   onPaste={() => {return false}} onCopy={() => {return false}} onCut={() => {return false}} onDrag={() => {return false}}
                   onDrop={() => {return false}}  autoComplete='off'/>
          </p>
          <p>
            <label htmlFor="securityCode">Código de seguridad</label>
            <input type="text" id="securityCode" data-checkout="securityCode" onselectstart={() => {return false}}
                   onPaste={() => {return false}} onCopy={() => {return false}} onCut={() => {return false}} onDrag={() => {return false}}
                   onDrop={() => {return false}} autoComplete='off'/>
          </p>
          <p>
            <label htmlFor="installments">Cuotas</label>
            <select id="installments" onChange={this.handleSubmit} className="form-control" name="installments" >
              {this.listOptionsInstallments()}
            </select>
          </p>
          <p>
            <label htmlFor="docType">Tipo de documento</label>
            <select id="docType" data-checkout="docType" />
          </p>
          <p>
            <label htmlFor="docNumber">Número de documento</label>
            <input type="text" id="docNumber" data-checkout="docNumber"/>
          </p>
          <input type="hidden" name="payment_method_id" id="payment_method_id"/>
          <CustomButton color={'primary'} onClick={this.doPay}>Pagar</CustomButton>
        </fieldset>
      </div>
    );
  }
}

export default MercadoPagoLayout;