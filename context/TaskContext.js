import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const dataFixed = [
    {
        id: 1,
        name: 'Tarea 1',
        description: 'Ir al colegio',
        date: new Date(2023, 2, 16),
        status: 'P'
    },
    {
        id: 2,
        name: 'Tarea 2',
        description: 'Ir al trabajo',
        date: new Date(2023, 2, 17),
        status: 'C'
    },
];

export const TaskProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed);

    return (
        <TaskContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </TaskContext.Provider>
    )
}
