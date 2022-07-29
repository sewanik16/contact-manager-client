import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImportModal(props) {
  return (
    <Modal className='modal' {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Import / Upload
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h3>Drag & Drop CSV file to upload</h3>
            </Modal.Body>
            <Modal.Footer>
                    <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
    </Modal>
  );
}

export default ImportModal;

