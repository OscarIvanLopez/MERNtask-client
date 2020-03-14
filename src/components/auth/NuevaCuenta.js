/* eslint-disable no-console */

import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {
    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiera iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios

        //Password minimo de 6 caracteres

        //Los dos password sean iguales
        //pasarlo al action
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Nueva Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">

                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="nombre"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">

                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">

                        {/* TE QUEDASTE EN EL INPUT DE CONFIRMACION DE CONTRASEÑA  MINUTO 1:40*/}
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"/>
                    </div>


                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;