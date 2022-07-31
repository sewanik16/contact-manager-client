
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import {useDropzone} from "react-dropzone"

function AddForm() {
  const [files,setFiles] = useState([])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept:"images/*",
        onDrop:(acceptedFiles)=>{
            setFiles(
                acceptedFiles.map((file)=> Object.assign(file,{
                    preview: URL.createObjectURL(file)
                })
            )
            )
            console.log(acceptedFiles)
        }
    })

    const testFile = (e)=>{
        console.log(e.target.files[0].name)
    }

  return (
    <>  
        <Form>
          <Form.Group>
            {/* <Form.Control type="text" placeholder="Name *" required> */}
            <img src='upload.png' style={{width:"30px"}} alt=""/>
            <h6 style={{textAlign:"center",margin:"10px"}}>Import File</h6>
            <div style={{margin:"20px 30px"}}>
                <div {...getRootProps()}>
                            <input {...getInputProps()} onChange={testFile}/>
                            {
                                isDragActive ? <p style={{color:"green"}}>Drop here.. </p> : <p style={{color:"skyblue"}}>Drag & Drop CSV file</p>
                            }
                            </div>
            </div>
            <button style={{padding:"2px 16px",background:"skyblue",border:"none",borderRadius:"4px",color:"white"}}>Cancel</button>
            {/* </Form.Control> */}
          </Form.Group>
        </Form>
    </>
  );
}



export default AddForm;

