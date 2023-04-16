import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoMdAddCircle } from 'react-icons/io';
import { HiMinusCircle } from 'react-icons/hi';
import { AppContext } from '../context/AppContext';



const ExpenseItem = (props) => {
    const { currency} = useContext(AppContext);
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoMdAddCircle size='2em' color='green'></IoMdAddCircle></td>
            <td><HiMinusCircle size='2em' color='red'></HiMinusCircle></td>
            <td><TiDelete size='1em'></TiDelete></td>
            </tr>
    );
};

export default ExpenseItem;



