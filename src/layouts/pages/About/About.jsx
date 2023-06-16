import React from 'react';
import { useQuery } from 'react-query';

const About = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://smc-server.vercel.app/users')
        return res.json();
    })

    console.log(users);

    return (
        <div>
            About Page is under working

            <p>
                {users.length}
            </p>



        </div>
    );
};

export default About;