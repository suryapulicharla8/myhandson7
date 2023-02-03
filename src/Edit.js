import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {useLocation , useNavigate} from 'react-router-dom'
import { editData } from "./features/CounterSlice";


function Edit(){
    const location=useLocation();
    const navigate=useNavigate();
    const index=(location.state.data);
    const dispatch=useDispatch();
    const array=useSelector((state)=>state.dataKey);


    const newObj={
        name:array[index].name,
        id:array[index].id
    }
    console.log('Index :' + index)
    const handleChange=(event)=>{
        newObj[event.target.name]=event.target.value;
    }
    const handleUpdata=(event)=>{
        dispatch(editData({newObj,index}));
        
        // navigate('/')
    }
    navigate('/')
    return(
        <>
        <input onChange={handleChange} name='name' placeholder={array[index].name}></input>
        <input onChange={handleChange} name='id' placeholder={array[index].id}></input>
        <br/>
        <button onClick={handleUpdata}>Update</button>
        </>
    )
}
export default Edit;