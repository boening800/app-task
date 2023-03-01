import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TaskItemComponent({id,name,description,status}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles(status).item} onPress={()=>{navigation.navigate('ScreenDetailTask',{id})}}>
        <Text style={styles().title}>{name}</Text>
        <Text style={styles().description}>{description}</Text>
        <Text style={styles().status}>{(status=='P') ? 'pendiente': 'completado'}</Text>
    </TouchableOpacity>
  )
}

const styles = (status)=> StyleSheet.create({
  item: {
    backgroundColor: (status=='P') ? '#fc7b27' :'#007882',
    padding: 20,
    marginVertical: 8,
    borderRadius:5,
    position:'relative',
    shadowColor: 'rgba(0,0,0, .3)',
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8
  },
  title: {
    fontSize: 16,
    color:'#fff',
    fontWeight:'bold'
  },
  description: {
    fontSize: 12,
    color:'#fff'
  },
  status: {
    position:'absolute',
    top:5,
    right:5,
    color:'#fff',
  }
});