import { useEffect, useState } from "react"
import {useDropzone} from "react-dropzone"

function DragDrop(){
    const [files,setFiles] = useState([])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept:"images/*",
        onDrop:(acceptedFiles)=>{
            setFiles(
                acceptedFiles.map((file)=> Object.assign(file,{
                    preview: URL.createObjectURL(file)
                })
            ))
        }
    })

    return(
        <>
                <div style={{marginLeft:"400px",marginTop:"200px",width:"400px",height:"400px",border:"1px solid red"}}>
                        <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ? <p style={{width:"300px",height:"100px"}}>Drop here.. </p> : <p style={{width:"300px",height:"100px"}}>Drag & Drop your file or click to select file</p>
                        }
                        </div>
                        <div>
                            {
                                files.map(file=>{
                                    return(
                                        <div>
                                            {files[0].path}
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
               
        </>
    )
}

export default DragDrop;