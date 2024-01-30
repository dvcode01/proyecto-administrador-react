import Paciente from './Paciente';

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 mt-10 md:mt-0 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h3 className='font-black text-3xl text-center'>Listado Pacientes</h3>

          <p className='text-lg text-center mt-5 mb-10'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h3 className='font-black text-3xl text-center'>No Hay Pacientes</h3>

          <p className='text-lg text-center mt-5 mb-10'>
              Comienza agregando tus pacientes y {''}
              <span className='text-indigo-600 font-bold'>Aparecerán en este lugar</span>
          </p>
        </>
      )}

        
    </div>
  )
}

export default ListadoPacientes