import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, }) => {
    const { name, specialty, img, email } = doctor;
    console.log(email)

const handleDelete=email=>{
    fetch(`http://localhost:5000/doctor/${email}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        if(data.deletedCount){
            toast.success(`Doctor  ${name} Deleted Successfully`)
            refetch()
        }
    })
}
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => handleDelete(email)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;