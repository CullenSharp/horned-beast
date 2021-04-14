import {Component} from 'react';
import Modal from 'react-bootstrap/Modal'

export default class SelectedBeast extends component {
    render() {
        return(
            <Modal show={/* this.props.show */} onHide={/* this.props.onClose */}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/* this.props.title */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={/* this.props.imgUrl */}/>
                </Modal.Body>
                <Modal.Footer>
                    {/* this.props.desc */}
                </Modal.Footer>
            </Modal>
        );
    }
}