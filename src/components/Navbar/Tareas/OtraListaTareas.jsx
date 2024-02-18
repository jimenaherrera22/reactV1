import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const OtraListaTareas = ({tareas, setTareas}) => {
    //const {tareas}=props
    const [task, setTask]=useState([]);
//EFECTO SOLO EN EL MONTAJE
   /* useEffect(()=>{

    },[])*/
//EFECTO CON ACTUALIZACIONES
useEffect(()=>{
    setTask(tareas)
},[tareas])

    const eliminarTarea=(index)=>{
    let nuevasTareas=tareas;
    nuevasTareas.splice(index,1)
    setTareas([...nuevasTareas]);
    };
    return (
        <div className=' border border-2 border-danger'>
            <div className='container'>
                <div className='d-flex justify-content-between my-3 py-2'>
            <h3> Otra Lista de tareas a realizar</h3>
            <Button type="button" variant="danger" onClick={()=>{
              setTareas([]);
            }} >Eliminar todas las tareas</Button>
           </div>
           <ol>
            {tareas.map((elemento, index)=>{ 
            return(
                <div key={index} className='my-2'>
                <li> <div className='d-flex justify-content-between' >
                    <p>Tarea: {elemento}</p> 
                    <Button type='button' variant='warning' onClick={(e)=>{
                       eliminarTarea(index);
                    }} >Realizado</Button>
                    </div></li>
                </div>
            )
            }) }
           </ol>
        </div>
        </div>
    );
};

export default OtraListaTareas;