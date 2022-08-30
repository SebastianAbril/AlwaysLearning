import {useState} from 'react';

export const Formulario = () =>{

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const handleInputChange = (event) =>{
       setDatos({
        ...datos,
        [event.target.name]: event.target.value
       })
    }
    const enviarDatos = (event)=>{
        event.preventDefault();
        console.log(datos.nombre + " " +datos.apellido)
    }
   
    return (
        //COMO REGLA GENERAl: el atributo name del input tiene que ser el mismo 
        //que el atributo de mi estado (datos), en este caso el objeto{ nombre:"", apellido:""}
        <>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Apellido"
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </>
        
    );
}