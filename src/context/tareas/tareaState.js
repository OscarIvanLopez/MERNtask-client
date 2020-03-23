import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import uuid from 'uuid/v1';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1,nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
            { id: 2,nombre: "Elegir Colores", estado: false, proyectoId: 2 },
            { id: 3,nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 },
            { id: 4,nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
            { id: 5,nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
            { id: 6,nombre: "Elegir Colores", estado: false, proyectoId: 2 },
            { id: 7,nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 },
            { id: 8,nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
            { id: 9,nombre: "Elegir Colores", estado: false, proyectoId: 1 },
            { id: 10,nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 2 },
            { id: 11,nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
            { id: 12,nombre: "Elegir Colores", estado: false, proyectoId: 4 },
            { id: 13,nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 }
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    };

    //*crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    //* Crear las funciones 

    //* Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //* Agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea) =>{
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
            
        });
    }

    //* VALIDA Y MUESTRA UN ERROR EN CASO DE QUE SEA NECESARIO
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA,
            
        });
    }

    //* Eliminar por id
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    //* Cambia el estado de cada tarea
    const cambiarEstadoTarea= tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //* Extrae una tarea  para edicion
    const guardarTareaActual = tarea =>{
        dispatch({
            type:TAREA_ACTUAL,
            payload: tarea
        })
    }

        //* Edita o modifica una tarea
        const actualizarTarea = tarea =>{
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: tarea
            })
        }

        //* Elimina la tarea seleccionada
        const limpiarTarea=() =>{
            dispatch({
                type: LIMPIAR_TAREA
            })
        }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
};

export default TareaState;
