import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Welcome from '../pages/Welcome';

const WelcomeContainer = () => {
    const location = useLocation();
    const history = useHistory();
    const [form, setForm] = useState({});
    const [item, setItem] = useState({ id: '', name: '' });
    const [data, setData] = useState([
        { id: "001", name: "Rodo Ocampo" },
        { id: "002", name: "Oscar Juarez" },
        { id: "003", name: "Sebastian Guatemala" }
    ]);

    useEffect(
        () => {
            setForm(location.state.form);
        }, [location]
    )

    const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

    //Funcion anonima para regresar hacia la anterior página
    const goBack = () => history.goBack();

    //Reaccion del formulario, que sirve para agregar nuevos items
    const add = (e) => {
        e.preventDefault();
        //Establecemos la data, como es un objeto iterado se pone entre corchetes
        setData([...data, item]);
        //Limpiamos el formulario, poniendolo de nuevo en su estado inicial
        setItem({ id: '', name: '' });
    }

    //Funcion anonima para eliminar un item, al tener solo un enunciado no necesita  usar llaves
    const trash = (e) => setData( data.filter(item => item.id !== e.target.id) );

    const trashDos = (item) => {
        setData( data.filter( itemOld => !(itemOld.id === item.id && itemOld.name === item.name)) )
    }

    return (
        <Welcome trashDos={trashDos} add={add} trash={trash} onChange={onChange} item={item} data={data} form={form} goBack={goBack} />
    )
};

export default WelcomeContainer;