import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'

//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//import IonicIcons from 'react-native-vector-icons/Ionicons'

import { MaterialIcons, Entypo } from '@expo/vector-icons'

import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const GoogleImageSrc = '../../../assets/images/google.png'
const FacebookImageSrc = '../../../assets/images/facebook.png'
const TwitterImageSrc = '../../../assets/images/twitter.png'


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: 500,
        backgroundColor: '#F0F8FF'
      }}
    >
     <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 25
        }}
      >
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'left',
            marginBottom: 0,
            color: 'F0F8FF'
          }}
        >
          
          <Text>Resumo </Text>

          <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginHorizontal: -40,
            marginVertical: -45,
            fontWeight: 'bold'
          }}
        >
          Favoritos
        </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#000080',
          padding: 50,
          marginHorizontal: -40,
          marginVertical: 50,
          width: '90%',
          borderRadius: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Login')}
      >
        
        
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginHorizontal: -45,
            marginVertical: -45,
            fontWeight: 'bold'
          }}
        >
          Passos
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 22,
            marginRight: 120,
            marginTop: 50,
            marginVertical: 5,
            fontWeight: 'bold'
          }}
        >
          10058.08 passos
        </Text>

      </TouchableOpacity>
      </View>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'left',
            marginBottom: 0,
            color: 'F0F8FF'
          }}
        >
      <TouchableOpacity
        style={{
          backgroundColor: '#000080',
          padding: 50,
          marginHorizontal: 10,
          marginVertical: 50,
          width: '90%',
          borderRadius: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Sono')}
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
          Horas de Sono
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 22,
            marginRight: 50,
            marginTop: 10,
            marginVertical: 4,
            fontWeight: 'bold'
          }}
        >
          6h 18min
          Tempo na Cama
          
        </Text>


      </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  
  )
}

export default LoginScreen
