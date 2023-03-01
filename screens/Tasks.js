
import { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// COMPONENTS
import TaskItemComponent from "../component/TaskItemComponent";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function Home() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={ListTasks}
                name='ScreenListTasks'
                options={{
                    header: () => (
                        <View style={{ height: 'auto', paddingHorizontal: 10, paddingVertical:10, display:'flex', gap:5, justifyContent:'center', alignItems:'center' }}>
                            
                            <ScrollView horizontal>
                                <TouchableOpacity style={styles.touchableFilter}>
                                    <View style={styles.buttonFilter}>
                                        <Text style={styles.textButtonFilter}>Todos</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableFilter}>
                                    <View style={styles.buttonFilter}>
                                        <Text style={styles.textButtonFilter}>Completados</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableFilter}>
                                    <View style={styles.buttonFilter}>
                                        <Text style={styles.textButtonFilter}>Pendientes</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    )
                }} />
            <Stack.Screen component={DetailTask} name='ScreenDetailTask' options={{
                title:''
            }}/>
        </Stack.Navigator>
    )
}

const ListTasks = () => {
    const navigation = useNavigation();
    const {data} = useContext(TaskContext);
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#fc7b27',
            },
            headerTintColor: '#fff',
            headerTransparent: false,
        });
    }, [navigation]);
   
    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                {
                    data.map((item) => (
                        <TaskItemComponent
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            status={item.status}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const DetailTask = ({ route }) => {
    const data = route.params;
    return (
        <Text>Detalle de Tarea {data.id}</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 8
    },
    touchableFilter: {
        marginHorizontal: 3
    },
    buttonFilter: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
        backgroundColor: '#007882',
    },
    textButtonFilter: {
        color: '#fff'
    }
});
