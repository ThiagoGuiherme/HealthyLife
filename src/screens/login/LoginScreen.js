import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
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
        paddingVertical: 100,
        backgroundColor: '#87CEFA'
      }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: '#000080',
            marginBottom: 30
          }}
        >
          Login
        </Text>
        <CustomInput
          label={'Email'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={'#000080'}
              style={{ marginRight: 10 }}
            />
          }
          keyboardType={'email-address'}
        />

        <CustomInput
          label={'Password'}
          icon={
            <Entypo
              name="key"
              size={20}
              color={'#000080'}
              style={{ marginRight: 5 }}
            />
          }
          inputType={'password'}
          fieldButtonLabel={'Esqueceu a senha?'}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
        e
          label={'Login'}
          onPress={() => navigation.navigate('Home')}
        />
        <Text
          style={{
            textAlign: 'center',
            color: '#000080',
            marginBottom: 450
          }}
        >
          Ou logar com...
        </Text>

        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Image
            source={require("../../../assets/images/lanche.jpg")}
            style={{
              height: 300,
              width: 350,
              marginVertical: -400,
              transform: [
                {
                  rotate: '5deg'
                }
              ]
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 50
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: '#000080',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
            onPress={() => {}}
          >
            <Image
              source={require(GoogleImageSrc)}
              style={{
                height: 24,
                width: 24
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#000080',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
            onPress={() => {}}
          >
            <Image
              source={require(FacebookImageSrc)}
              style={{
                height: 24,
                width: 24
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#000080',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10
            }}
            onPress={() => {}}
          >
            <Image
              source={require("../../../assets/images/twitter.png")}
              style={{
                height: 24,
                width: 24
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30
          }}
        >
          <Text>Novo por aqui? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Registrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
