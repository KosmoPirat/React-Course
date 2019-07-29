import React from 'react';

import './WelcomeModal.css';

export default class WelcomeModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        };
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setState({ modal: true });
    }

    closeModal() {
        this.setState({ modal: false });
    }

    render() {
        let modal;
        if (this.state.modal) {
            modal = (
                <div className="modal-block">
                    <div className="modal__header">
                        <h2 className="modal__title">{this.props.title}</h2>
                        <button className="modal__btn-close" onClick={this.closeModal}>Закрыть</button>
                    </div>
                    <div className="modal__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                </div>
            );
        }
        return <div>{modal}</div>;
    }

}