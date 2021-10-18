import React from 'react';

const Welcome = ({trash, trashDos, add, onChange, item, data, form, goBack}) =>(
    <div className="secondary">
        
        <div className="text-center pt-5">
            <h2>Bienvenido {form.nombre}</h2>
            <h4>Iniciaste sesión con {form.email}</h4>
        </div>

        <div className="text-center mt-4">
            <button onClick={goBack} className="btn btn-success">Volver</button>
        </div>

        <div className="container mt-4">
            <form onSubmit={add}>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label>ID:</label>
                        <input required name="id" onChange={onChange} value={item.id} className="form-control" autoComplete="off" type="text" placeholder="ID"></input>
                    </div>
                    <div className="col-md-8 form-group">
                        <label>Nombre:</label>
                        <input required name="name" onChange={onChange} value={item.name} className="form-control" autoComplete="off" type="text" placeholder="Nombre"></input>
                    </div>
                </div>
                <div className="text-end mt-4"> 
                    <button type="submit" className="btn btn-success">Añadir</button>
                </div>
            </form>
        </div>

        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> # </th>
                        <th scope="col"> ID </th>
                        <th scope="col"> Nombre </th>
                        <th className="text-center" scope="col"> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (item, i) =>
                            (
                                <tr>
                                    <th scope="row"> {i+1} </th>
                                    <td> { item.id } </td>
                                    <td> { item.name} </td>
                                    <td className="text-center" > <button id={item.id} onClick={trash} className="btn btn-danger">X</button> </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
);

export default Welcome;