
export const addClass = async classData => {
    const response = await fetch(`http://localhost:5000/classes`, {
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
    const response = await fetch(`http://localhost:5000/classes`)
    const Classes = await response.json();
    return Classes;
}


export const getClasses = async email => {
    const response = await fetch(`http://localhost:5000/classes/${email}`)
    const data = await response.json()
    return data
}


export const getClass = async id => {
    const response = await fetch(`http://localhost:5000/classes/${id}`)
    const data = await response.json()
    return data
}


export const deleteClass = async id => {
    const response = await fetch(`http://localhost:5000/classes/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}



export const approveClass = (classId) => {
    return fetch(`http://localhost:5000/classes/${classId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((res) => res.json())
};