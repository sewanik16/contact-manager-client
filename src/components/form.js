
import Form from 'react-bootstrap/Form';

function AddForm() {
  return (
    <>  
        <Form>
          <Form.Group>
            {/* <Form.Control type="text" placeholder="Name *" required> */}
            <img src='upload.png' style={{width:"50px",marginLeft:"35%"}}/>
            <h4 style={{textAlign:"center"}}>Import File</h4>
            <h6 style={{textAlign:"center",color:"blue"}}>Drag & Drop CSV File to import</h6>
            <button style={{marginLeft:"30%",background:"gray",border:"none"}}>Cancel</button>
            {/* </Form.Control> */}
          </Form.Group>
        </Form>
    </>
  );
}



export default AddForm;

