import axios from 'axios';
// import { query } from '@tanstack/query';

export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        role: '',
    };

    axios
        .put(`http://localhost:5000/users/${user?.email}`, currentUser, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.data)
        .then(data => console.log(data))
        .catch(error => console.error(error));
};

// save a user to database
// export const saveUser = user => {
//     const currentUser = {
//         email: user.email,
//         name: user.displayName,
//         image: user.photoURL,
//         role: '',
//     }

//     fetch(`http://localhost:5000/users/${user?.email}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(currentUser),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// Host
export const becomeInstructor = email => {
    const currentUser = {
        role: 'instructor',
    }

    return fetch(`http://localhost:5000/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}

// Get role
export const getRole = async email => {
    try {
        const response = await fetch(`http://localhost:5000/users/${email}`);
        const user = await response.json();
        return user?.role;
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
};