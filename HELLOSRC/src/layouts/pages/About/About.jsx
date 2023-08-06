import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';

const About = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://smc-server.vercel.app/users')
        return res.json();
    })

    console.log(users);

    return (
        <div className='text-center py-10'>

            <Helmet>
                <title>ESA | About</title>
            </Helmet>

            Under Process
        </div>
    );
};

export default About;