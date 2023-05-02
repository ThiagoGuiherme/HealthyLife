import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { MaterialIcons, Entypo } from '@expo/vector-icons'

import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const RegistrationImageSrc = '../../../assets/images/registration.png'
const GoogleImageSrc = '../../../assets/images/google.png'
const FacebookImageSrc = '../../../assets/images/facebook.png'
const TwitterImageSrc = '../../../assets/images/twitter.png'

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [birthLabel, setBirthLabel] = useState('Data de Nascimento')

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FAFAD2'
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 25
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            marginHorizontal: 0,
            marginVertical: 0,
            fontWeight: 'bold'
          }}
        >
          DURMA MAIS !!!!!
        </Text>
        <TouchableOpacity
        style={{
          backgroundColor: '#000080',
          padding: 50,
          marginLeft: 25,
          marginHorizontal: -40,
          marginVertical: 10,
          width: '80%',
          borderRadius: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Home')}
      >
        
        
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginHorizontal: -50,
            marginVertical: -45,
            fontWeight: 'bold'
          }}
        >
          Voltar Para Tela de Inicio
        </Text>


      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen
