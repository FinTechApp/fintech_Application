import { useState } from "react";
import "./upload.css";

function Upload(){
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        idType: "",
        serial: "",
        expDate: "",
    });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log({ file, ...formData });
        alert("Form Submitted!");
    };

    return (
        <div className="upload-container">
            {/* steps */}
            <div className="steps">
                <div className="step done">✔Sign up</div>
                <div className="step done">✔Verify Email</div>
                <div className="step active">3 Upload credentials</div>
            </div>

            <hr />

            {/* Title */}
            {/* <h2>Upload a valid ID</h2>
            <P className="sub-text">Please upload a valid national identification driver's license or voters card</P> */}

            {/*Upload Box*/}
            <div className="upload-box"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            >
                <input type="file" onChange={handleFileChange} hidden id="fileInput" />

                <label htmlFor="fileInput">
                    <p className="upload-text">
                        click to Upload <span>or drag and drop</span>
                    </p>
                    <small>Max. File size: 25 MB</small>
                </label>

                {file && <p className="file-name">{file.name}</p>}
            </div>

            {/*Form*/}
            <div className="form">
                <div>
                    <label> Valid ID type</label>
                    <select name="idType" onChange={handleChange}> 
                        <option value="">-Select-</option>
                        <option >National ID</option>
                        <option >Driver License</option>
                        <option >Voter Card</option>
                    </select>
                </div>

                <div>
                    <label>Serial No</label>
                    <input 
                    type="text"
                    name="serial"
                    onChange={handleChange}
                    />
                </div>

                <div className="full">
                    <label>Exp date</label>
                    <input
                    type="date"
                    name="expDate"
                    onChange={handleChange}
                    />
                </div>
            </div>

            {/*Button */}
            <button className="next-btn" onClick={handleSubmit}>
                Next
            </button>
        </div>
    );
}

export default Upload