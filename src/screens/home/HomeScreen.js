import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity,  Image } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  return (
			
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 2,
        backgroundColor: '#FAFAD2',
        margin: 0,
			padding: 0,
		
      }}
      
    >
      
      <TouchableOpacity
            style={{
              margin: 20,
              marginTop: 5,
              borderColor: '#ddd',
              marginRight:350,
              borderRadius: 10,
              paddingHorizontal: 100,
              paddingVertical: 10
            }}
           
          >
      <Image
              source={require("../../../assets/images/banco.png")}
              style={{
                marginTop: 5,
                height: 50,
                width: 50
              }}
            />
             </TouchableOpacity>
             
             <TouchableOpacity
            style={{
              margin: 20,
              marginTop: 5,
              borderColor: '#ddd',
              marginRight:350,
              borderRadius: 10,
              paddingHorizontal: 100,
              paddingVertical: 10
            }}
           
          >
     
      <Image
              source={require("../../../assets/images/notificacao.png")}
              style={{
                marginLeft: 700,
                marginTop: -90,
                height: 50,
                width: 50
              }}
            />
            
             </TouchableOpacity>
             <TouchableOpacity
        style={{
          backgroundColor: '#000080',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Notas')}
      >
        
        
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Saúde
        </Text>

        <MaterialIcons
          name="login"
          size={20}
          color={'#fff'}
          style={{ marginRight: 5 }}
        />
      </TouchableOpacity>

       <View
        style={{
          marginTop: 500
        }}
      >
        
        <Text
          style={{
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 40,
            color: '#1C1C1C'
          }}
        >
          Healthy Life
        </Text>
      </View>
      
      <TouchableOpacity
        style={{
          backgroundColor: '#000080',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 100,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        onPress={() => navigation.navigate('Login')}
      >
        
        
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Entrar
        </Text>

        <MaterialIcons
          name="login"
          size={20}
          color={'#fff'}
          style={{ marginRight: 5 }}
        />
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default HomeScreen
