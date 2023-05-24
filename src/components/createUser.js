import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const endpoint = 'http://127.0.0.1:8000/user'
const CreateUser = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [usuario, setUsuario] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/usuario/guardarUsuario', {nombre: nombre, telefono: telefono, correo: correo, usuario: usuario, pass: pass})
        navigate('/')
    }   
  return (
    <div>
        <h3>Crear usuario</h3>
        <form onSubmit={store} method='post'>
            <div className='mb-3'>
                <label className='form-label'>Nombre: </label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                
                /> 
            </div>

            <div className='mb-3'>
                <label className='form-label'>telefono: </label>
                <input 
                    value={telefono}
                    onChange={ (e)=> setTelefono(e.target.value)}
                    type='text'
                    className='form-control'
                
                /> 
            </div>
            <div className='mb-3'>
                <label className='form-label'>Correo: </label>
                <input 
                    value={correo}
                    onChange={ (e)=> setCorreo(e.target.value)}
                    type='text'
                    className='form-control'
                
                /> 
            </div>
            <div className='mb-3'>
                <label className='form-label'>Usuario: </label>
                <input 
                    value={usuario}
                    onChange={ (e)=> setUsuario(e.target.value)}
                    type='text'
                    className='form-control'
                
                /> 
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contraseña: </label>
                <input 
                    value={pass}
                    onChange={ (e)=> setPass(e.target.value)}
                    type='password'
                    className='form-control'
                
                /> 
            </div>
            <button type='submit'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateUser