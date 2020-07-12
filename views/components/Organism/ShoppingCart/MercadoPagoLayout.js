import React from 'react';
import CustomButton from '../../Atoms/CustomButtons/Button';
import { env } from '../../../../config/environment';

class MercadoPagoLayout extends React.Component {
  doSubmit = false;

  constructor(props) {
    super(props);
    this.state = {
      paymentMethodId: '',
      installmentsOptions: [],

      cardNumber: '',
      securityCode: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      cardholderName: '',
      identificationType: '',
      identificationNumber: '',
      installments: '',
    };
  }

  async componentDidMount() {
    if (!this.isServer()) {
      return new Promise((resolve, reject) => {
        try{
          window.Mercadopago.setPublishableKey(env('MERCADO_PAGO_KEY', 'APP_USR-854382a2-e53a-4386-8cc4-67c47ed02284'));
          window.Mercadopago.getIdentificationTypes();
          resolve();
        }catch (e) {
          reject(e);
        }
      });
    }
  }

  isServer = () => {
    return window === undefined;
  };

  doPay = event => {
    event.preventDefault();
    if (!this.doSubmit) {
      const fields = [
        'cardNumber',
        'securityCode',
        'cardExpirationMonth',
        'cardExpirationYear',
        'cardholderName',
        'docType',
        'docNumber',
        'installments',
      ];

      const formElements = event.target.elements;
      const $form = fields
        .map(field => ({
          [field]: formElements.namedItem(field).value,
        }))
        .reduce((current, next) => ({ ...current, ...next }));
      console.log($form);
      window.Mercadopago.createToken($form, this.sdkResponseHandler);
    }
  };

  sdkResponseHandler = (status, response) => {
    if (status !== 200 && status !== 201) {
      alert('verifique la información proporcionada');
      console.log(response);
    } else {
      this.setState({ token: response.id });
      this.doSubmit = true;
    }
  };

  getAmount = () => {
    return this.props.cart.transactionAmount;
  };

  guessPaymentMethod = event => {
    const cardNumber = event.target.value;
    if (cardNumber.length >= 6) {
      let bin = cardNumber.substring(0, 6);
      this.setState({ cardNumber });
      window.Mercadopago.getPaymentMethod(
        {
          bin: bin,
        },
        this.setPaymentMethod,
      );
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
  };

  getInstallments = () => {
    if (this.isServer()) {
      return;
    }

    let options = [];
    window.Mercadopago.getInstallments(
      {
        payment_method_id: this.state.paymentMethodId,
        amount: this.getAmount(),
      },
      function(status, response) {
        if (status === 200) {
          response[0].payer_costs.forEach(installment => {
            options.push({
              installments: installment.installments,
              recommended_message: installment.recommended_message,
            });
          });
        } else {
          alert(`installments method info error: ${response}`);
        }
      },
    );

    this.setState({ installmentsOptions: options, installments: '1' });
  };

  handleSubmit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  listOptionsInstallments = () => {
    console.log(this.state.installmentsOptions);
    return this.state.installmentsOptions.map(option => {
      return <option value={option.installments}>{option.recommended_message}</option>;
    });
  };

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.doPay}>
            <p>
              <label htmlFor="description">Descripción</label>
              <input type="text" name="description" id="description" value={this.props.cart.description} />
            </p>
            <p>
              <label htmlFor="transaction_amount">Monto a pagar</label>
              <input name="transaction_amount" id="transaction_amount" readOnly={true} value={this.getAmount()} />
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
                autoComplete="off"
                onChange={this.guessPaymentMethod}
                onKeyUp={this.guessPaymentMethod}
              />
            </p>
            <p>
              <label htmlFor="cardholderName">Nombre y apellido</label>
              <input type="text" id="cardholderName" onChange={this.handleSubmit} data-checkout="cardholderName" />
            </p>
            <p>
              <label htmlFor="cardExpirationMonth">Mes de vencimiento</label>
              <input
                type="text"
                id="cardExpirationMonth"
                name={'cardExpirationMonth'}
                data-checkout="cardExpirationMonth"
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
                onChange={this.handleSubmit}
                autoComplete="off"
              />
            </p>
            <p>
              <label htmlFor="cardExpirationYear">Año de vencimiento</label>
              <input
                type="text"
                id="cardExpirationYear"
                name={'cardExpirationYear'}
                data-checkout="cardExpirationYear"
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
                onChange={this.handleSubmit}
                autoComplete="off"
              />
            </p>
            <p>
              <label htmlFor="securityCode">Código de seguridad</label>
              <input
                type="text"
                id="securityCode"
                name={'securityCode'}
                data-checkout="securityCode"
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
                onChange={this.handleSubmit}
                autoComplete="off"
              />
            </p>
            <p>
              <label htmlFor="installments">Cuotas</label>
              <select id="installments" onChange={this.handleSubmit} className="form-control" name="installments">
                {this.listOptionsInstallments()}
              </select>
            </p>
            <p>
              <label htmlFor="docType">Tipo de documento</label>
              <select id="docType" name={'docType'} data-checkout="docType" onChange={this.handleSubmit} />
            </p>
            <p>
              <label htmlFor="docNumber">Número de documento</label>
              <input
                type="text"
                id="docNumber"
                name={'docNumber'}
                data-checkout="docNumber"
                onChange={this.handleSubmit}
              />
            </p>
            <CustomButton type={'submit'} color={'primary'}>
              Pagar
            </CustomButton>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default MercadoPagoLayout;
