import React from 'react';

const OrderIndividual = ({ orderedItem }) => {
    const { userName, email, phone, address, status, details, _id } = orderedItem;
    
    // const [deleted, setDeleted] = useState(false);
    const changeStatus = (newStatus, id) =>{
        console.log({newStatus}, id)
        fetch(`https://tranquil-bayou-21139.herokuapp.com/updateOrder/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({newStatus})
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{details}</td>
            <td><div className="dropdown">
                <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  {status}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button" onClick={()=>changeStatus("Pending",_id)}></button>Pending</li>
                    <li><button className="dropdown-item" type="button" onClick={()=>changeStatus("On going",_id)}>On going</button></li>
                    <li><button className="dropdown-item" type="button" onClick={()=>changeStatus("Done",_id)}>Done</button></li>
                </ul>
            </div></td>
        </tr>
    );
};

export default OrderIndividual;