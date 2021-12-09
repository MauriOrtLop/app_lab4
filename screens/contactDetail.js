import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import axios from 'axios'



const ContactDetail = (props) => {

    //console.log('id del usuario es : '+props.route.params.idUser)
    const idUser = props.route.params.idUser
    const [contacto, setContacto] = useState({
        id: "",
        name: "",
        apellido: "",
        email: "",
        direccion: "",
        telefono: "",
        nacimiento: ""
    })


    //hacer un peticion a la base de datos con el id que traigo de contactlist
    const getUser = (id) => {
        axios.get(`http://localhost:3000/contactos/${id}`)
            .then(res => {
                const datosUsuario = res.data
                //console.log(datosUsuario)
                setContacto({ ...datosUsuario })
            })

    }

    useEffect(() => {
        getUser(idUser)
    }, [])

    //Eliminar Contacto
    const elminarContacto = (id) => {
        let message = '¿Esta seguro de eliminar este contacto?'
        let result = window.confirm(message);
        if (result) {
            axios.delete(`http://localhost:3000/contactos/${id}`)
            props.navigation.navigate('Lista')
        }
    }

    // Actulizar Datos del Contacto
    const actulizarDatos = (id) => {
        axios({
            method: 'put',
            url: `http://localhost:3000/contactos/${id}`,
            data: {
                id: "",
                name: contacto.name,
                apellido: contacto.apellido,
                email: contacto.email,
                direccion: contacto.direccion,
                telefono: contacto.telefono,
                nacimiento: contacto.nacimiento
            }

        });
        props.navigation.navigate('Lista')

    }
    const handleChangeText = (name, value) => {
        setContacto({ ...contacto, [name]: value })
        //no entiendo los ... y los []
    }


    //pintar los datos en  el formulario
    return (
        <View>
            
            <TextInput value={contacto.name} onChangeText={(value) => handleChangeText('name', value)} placeholder={'Nombre'} />
            <TextInput value={contacto.apellido} onChangeText={(value) => handleChangeText('apellido', value)} placeholder={'Apellido'} />
            <TextInput value={contacto.direccion} onChangeText={(value) => handleChangeText('direccion', value)} placeholder={'Direccion'} />
            <TextInput value={contacto.telefono} onChangeText={(value) => handleChangeText('telefono', value)} placeholder={'Telefono'} />
            <TextInput value={contacto.nacimiento} onChangeText={(value) => handleChangeText('nacimiento', value)} placeholder={'Fecha de nacimiento'} />

            <Button title={'Eliminar'} onPress={() => { elminarContacto(idUser) }} />
            <Button title={'Actualizar'} onPress={() => actulizarDatos(idUser)} />

        </View>

    )
}

export default ContactDetail