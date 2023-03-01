import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// SCREENS
import Tasks from './screens/Tasks';
import NewTask from './screens/NewTask';
import { useContext, useEffect } from 'react';
import { TaskContext } from './context/TaskContext';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    const {data} = useContext(TaskContext);

    useEffect(() => {
        console.log('nuevo dato: ', data.length)
    }, [data]);
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='TabTasks'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'TabTasks') {
                            iconName = focused
                                ? 'ios-book'
                                : 'ios-book-outline';
                        } else if (route.name === 'TabNewTask') {
                            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#fc7b27',
                    tabBarInactiveTintColor: '#007882',
                })}
            >
                <Tab.Screen name="TabTasks" component={Tasks} options={{ tabBarLabel: 'Tareas', title: 'Tareas', tabBarBadge: data.length,headerShown: true  }} />
                <Tab.Screen name="TabNewTask" component={NewTask} options={{ tabBarLabel: 'Nueva Tarea', title: 'Nueva Tarea', headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}