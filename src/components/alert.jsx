import React, { Component } from 'react';
import { ALERT_SUCCESS, ALERT_SCHEDULED_FORM_INVALID } from '../consts/alertTypes.jsx';

class Alert extends Component {
    render() {
        const { type } = this.props;
        const alertClassName = 'alert alert-' + type;

        let alertMessage;
        switch (type) {
            case ALERT_SUCCESS:
                alertMessage = '<strong>Sypanie karmy zakończone sukcesem.</strong> Twój zwierzak będzie szczęśliwy! ^_^';
                break;
            case ALERT_SCHEDULED_FORM_INVALID:
                alertMessage = '<strong>Nie wybrano żadnych dni tygodnia.</strong> Wybierz, któryś i spróbuj ponownie lub anuluj.';
                break;
        }

        return (
            <div className={alertClassName}
                 role="alert"
                 dangerouslySetInnerHTML={{__html: alertMessage}}/>
        );
    }
}

export default Alert;