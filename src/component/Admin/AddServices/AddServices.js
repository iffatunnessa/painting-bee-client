import axios from 'axios';
import React, { useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';

const AddServices = () => {
    const [imageURL, setImageUrl] = useState(null);
    const [serviceTitle, setServiceTitle] = useState("");
    const [description, setDescription] = useState("");
    const [added, setAdded] = useState(false);
    const handleSubmit = e => {
        setAdded(true);
        const eventData = {
            serviceTitle: serviceTitle,
            description: description,
            imageURL: imageURL
        }
        const url = `https://tranquil-bayou-21139.herokuapp.com/addService`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("added item(client)", res));
        e.preventDefault();
    };

    const handleImageUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '049bb34ea207b6b7f5706ac5e3e40bfb');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="row" >
            <div className="col-md-3 col-12">
                <Dashboard />
            </div>
            <div className="col-md-9 col-12" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                <h3 style={{ paddingLeft: "20px" }}>Add a service</h3>
                {added && <div className="alert alert-success" role="alert">
                    An Item has been added!
                </div>
                }
                <form className="row g-4" onSubmit={handleSubmit} style={{ marginLeft: "10px" }}>
                    <div className="col-md-5 form-group" >
                        <label className="form-label">Service Title</label>
                        <input name="serviceTitle" type="text" className="form-control" id="serviceTitle" placeholder="Enter Service Title" required onChange={(e) => setServiceTitle(e.target.value)} />
                    </div>
                    <div className="col-md-5 form-group">
                        <label className="form-label">City</label>
                        <input type="file" name="imageURL" className="form-control" id="validationDefault03" required onChange={handleImageUpload} />
                    </div>
                    <div className="col-md-5 form-group">
                        <label className="form-label">Description</label>
                        <input type="text" name="description" className="form-control form-control-lg" id="description" placeholder="Enter Service Description" onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <div className="col-md-9"></div>
                    <div className="col-md-1">
                        <button className="btn btn-success" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;

