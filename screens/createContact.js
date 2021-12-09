import React, { useState } from 'react'
import { View, Text, Button, TextInput} from 'react-native'
import axios from "axios";


 const CreateContact = (props) => {

    const [state, setState] = useState({
            id:"",
            name:"",
            apellido: "",
            email: "",
            direccion: "",
            telefono:"",
            nacimiento:""
    })

    const handleChangeText = (name, value)=>{
        setState({...state, [name]: value})
        //no entiendo los ... y los []
    }

    const saveNewUser =() => {
        if(state.name === ''){
            alert('Ingrese un nombre')
        }else{
            axios({
                method:'post',
                url:'http://localhost:3000/contactos',
                data: {
                    id: "",
                    name:state.name,
                    apellido:state.apellido,
                    email:state.email,
                    direccion:state.direccion,
                    telefono:state.telefono,
                    nacimiento:state.nacimiento
                }

                
              });
              props.navigation.navigate('Lista')
        }
    }

    return(
        <View>
            <TextInput placeholder = {'Nombre'}  onChangeText ={(value)=> {handleChangeText('name', value)}} />
            <TextInput placeholder = {'Apellido'} onChangeText ={(value)=> handleChangeText('apellido', value)} />
            <TextInput placeholder = {'Direccion'} onChangeText ={(value)=> handleChangeText('direccion', value)} />
            <TextInput placeholder = {'Telefono'} onChangeText ={(value)=> handleChangeText('telefono', value)} />
            <TextInput placeholder = {'Fecha de nacimiento'} onChangeText ={(value)=> handleChangeText('nacimiento', value)}/>
            
            <Button 
            title = {'crear'} 
            onPress={saveNewUser}
             />
        </View>

    )
}

export default CreateContact