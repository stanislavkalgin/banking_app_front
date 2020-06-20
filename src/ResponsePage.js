import React from 'react';

export default class ResponseShow extends React.Component{
    render() {
        let values = Object.values(JSON.parse(this.props.response))
        return (
            <div>
                {
                    values.map((bank => (
                        <div>
                        <span>Название банка: {bank.bank_name}. </span>
                        <span>Ставка: {bank.interest_rate}. </span>
                        <span>Срок кредитования: {bank.loan_duration}. </span>
                        <span>Макимальная сумма кредита: {bank.loan_sum}. </span>
                        </div>
                    )))
                }
            </div>
        )
    }
}