import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-info'> Currency  {
      <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="INR">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default AllocationForm;
