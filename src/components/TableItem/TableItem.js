import React from 'react';

const TableItem = ({id,firstName, lastName, email, phone, state}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{state}</td>
        </tr>
    );
};

export default TableItem;