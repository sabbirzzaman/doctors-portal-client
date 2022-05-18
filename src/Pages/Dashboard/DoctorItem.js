import React from 'react';

const DoctorItem = ({doctor, index}) => {
    const {img, name, specialty} = doctor
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="mask mask-squircle w-12 h-12">
                    <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                    />
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button class="btn btn-error text-white btn-xs">Remove</button></td>
        </tr>
    );
};

export default DoctorItem;
