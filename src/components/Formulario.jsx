import {useState, useEffect} from 'react';
import Alerta from './Alerta';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
        
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // valdiacion formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }

        setError(false);

        // Objeto de paciente
        const objPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        };

        if(paciente.id){
            // Editando registro
            objPaciente.id = paciente.id;

            // Creando un nuevo registro
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

            // Agregando los nuevos pacientes
            setPacientes(pacientesActualizados);

            setPaciente({});

        }else{
            // Nuevo registro
            objPaciente.id = generarId();
            setPacientes([...pacientes, objPaciente]);
        }


        // Reinicia el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg text-center mt-5 mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5'>
            {error && <Alerta>Todos los campos son obligatorios</Alerta>}

            <div className='mb-5'>
                <label htmlFor='nombre' className='block text-gray-700 uppercase text-bold'>Nombre Mascota</label>

                <input type="text" name="nombre" id="nombre" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre de la mascota' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase text-bold'>Nombre Propietario</label>

                <input type="text" name="propietario" id="propietario" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre del Propietario' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
            </div>

            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase text-bold'>Email</label>

                <input type="email" name="email" id="email" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Email del Propietario' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase text-bold'>Alta</label>

                <input type="date" name="alta" id="alta" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className='block text-gray-700 uppercase text-bold'>Sintomas</label>

                <textarea name="sintomas" id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los sintomas del paciente' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
            </div>

            <input 
                type="submit" 
                className='p-3 bg-indigo-600 text-white w-full uppercase font-bold hover:bg-indigo-700 cursor-pointer' 
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
        </form>
    </div>
  )
}

export default Formulario