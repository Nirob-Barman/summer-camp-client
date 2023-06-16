
export const addClass = async classData => {
    const response = await fetch(`https://smc-server.vercel.app/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const addingClass = await response.json();
    return addingClass;
}


export const getAllClasses = async () => {
    const response = await fetch(`https://smc-server.vercel.app/classes`)
    const Classes = await response.json();
    return Classes;
}


export const getClasses = async email => {
    const response = await fetch(`https://smc-server.vercel.app/classes/${email}`)
    const data = await response.json()
    return data
}


export const getClass = async id => {
    const response = await fetch(`https://smc-server.vercel.app/classes/${id}`)
    const data = await response.json()
    return data
}


export const deleteClass = async id => {
    const response = await fetch(`https://smc-server.vercel.app/classes/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}



export const approveClass = (classId) => {
    return fetch(`https://smc-server.vercel.app/classes/${classId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((res) => res.json())
};