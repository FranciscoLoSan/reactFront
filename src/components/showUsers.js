import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const ShowUsers = () => {
    const [ users, setUsers ] = useState([])
    useEffect ( ()=> {
        getAllUsers()
    }, [])


    const getAllUsers = async () => {
       const response =  await axios.get('http://localhost:8000/usuarios')
       setUsers(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete('${endpoint}/usuarios/{id}')
        getAllUsers()
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
            <table className='table table-striped'>

                <thead className='bg-primary text-white'>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Usuario</th>
                </thead>
                <tbody>
                    { users.map( (user) => (
                        <tr key={user.id}>
                            <td> {user.nombre}</td>
                            <td> {user.telefono}</td>
                            <td> {user.correo}</td>
                            <td> {user.usuario}</td>
                            <td> 
                                <Link to={'/editar/${user.id}'} className='btn btn-warning'>Editar</Link>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ShowUsers
