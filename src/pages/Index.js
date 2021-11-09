
import React from 'react';
import Logo from '../images/brain2.png';

const Index = ({form, onChange, onSubmit, onClick}) => (
<>
    <div className="principal">
        <div className="container-form">
            
            <form onSubmit={onSubmit} className="form-react">
                <div className="title">
                    <h2>Rodo's Page</h2>
                </div>
                <div className="text-center mb-3">
                    <img src={Logo} alt="Logo Pagina"/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input autoComplete="off" required onChange={onChange} value={form.nombre} type="text" className="form-control" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="fechanac" className="form-label">Fecha de Nacimiento</label>
                    <input onChange={onChange} value={form.fechanac} type="date" className="form-control" name="fechanac" id="fechanac"/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="carrera" className="form-label">Carrera</label>
                    <input onChange={onChange} value={form.carrera} type="text" className="form-control" name="carrera" id="carrera" placeholder="Ingrese su carrera" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input autoComplete="on" required onChange={onChange} value={form.email} type="email" className="form-control" name="email" id="email" placeholder="Ingrese su correo" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Contraseña</label>
                    <input required onChange={onChange} value={form.pass} type="password" className="form-control" name="pass" id="pass" placeholder="Ingrese su contraseña" />
                </div>

                <div className="text-end mt-3">
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
    </div>

    <div className="principal">
        <div className="second-container">
            <form onClick={onClick} className="form-react">
                <div className="text-center mt-2">
                    <button type="click" className="btn btn-secondary btn-lg btn-block">Ir a RFC</button>
                </div>
            </form>
        </div>
    </div>
    </>    
);

        export default Index;