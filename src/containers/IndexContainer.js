import React,{useState} from 'react';
import { useHistory } from 'react-router';
import Index from '../pages/Index';

const IndexContainer = () =>{
    const history = useHistory();
    const [form, setForm] = useState({ nombre:'', fechanac:'', carrera:'', email:'', pass:'' });

    const onChange = (e) => setForm({...form, [e.target.id] : e.target.value });

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log( form );
        history.push( "/welcome/", {form: form});
    }

    const onClick = (e) =>{
        e.preventDefault();
        console.log( form );
        history.push( "/rfc/", {form: form});
    }

    const trash = (e) => {

    }

    return(
        <Index trash={trash} form={form} onChange={onChange} onSubmit={onSubmit} onClick={onClick}/>
    )
};

export default IndexContainer;