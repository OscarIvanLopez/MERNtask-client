import React, {Fragment, useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    //Si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [];

    //Eliminar un proyecto
    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    };
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                className="btn btn-eliminar"
                type="button"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
};

export default ListadoTareas;