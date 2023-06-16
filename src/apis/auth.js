import axios from 'axios';
// import { query } from '@tanstack/query';


export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        // role: "student",
    };

    axios
        .put(`https://smc-server.vercel.app/users/${user?.email}`, currentUser, {
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
//         role: "student",
//     }

//     fetch(`https://smc-server.vercel.app/users/${user?.email}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(currentUser),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


// Get all users
export const allusers = async () => {
    const response = await fetch(`https://smc-server.vercel.app/users`);
    const data = await response.json();
    return data;
};


// Instructor Role
export const becomeInstructor = (email) => {
    const currentUser = {
        role: "instructor",
    };

    return fetch(`https://smc-server.vercel.app/users/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    }).then((res) => res.json());
};

// Admin Role
export const becomeAdmin = (email) => {
    const currentUser = {
        role: "admin",
    };

    return fetch(`https://smc-server.vercel.app/users/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    }).then((res) => res.json());
};

// Get role
export const getRole = async email => {
    try {
        const response = await fetch(`https://smc-server.vercel.app/users/${email}`);
        const user = await response.json();
        return user?.role;
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
};