import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageIndividual = (props) => {
    const { serviceTitle, description, imageURL, _id } = props.item;
    const [deleted, setDeleted] = useState(false);
    console.log(_id);
    const deleteItem = id => {
        fetch(`https://tranquil-bayou-21139.herokuapp.com/manageService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setDeleted(true);
    }
    return (
        <>
            { deleted ? <div className="alert alert-success" role="alert">
                This item has been deleted!!
                </div>
                :
                <tr>
                    <td>{serviceTitle}</td>
                    <td>{description}</td>
                    <td><img style={{width:"40px"}} src={imageURL} alt=''/></td>
                    <td><button className="btn btn-danger" onClick={() => deleteItem(_id)}> <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 18, color: "white" }} /></button></td>
                </tr>
            }
        </>
    );
};
export default ManageIndividual;