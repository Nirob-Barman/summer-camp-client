// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const PopularClasses = () => {
//     const [popularClasses, setPopularClasses] = useState([]);

//     useEffect(() => {
//         // Fetch class data from the provided link
//         axios
//             .get('https://smc-server.vercel.app/classes')
//             .then((response) => {
//                 const approvedClasses = response.data.filter(
//                     (cls) => cls.status === 'approved' && parseInt(cls.availableSeats) > 0
//                 );
//                 setPopularClasses(approvedClasses.slice(0, 4));
//             })
//             .catch((error) => {
//                 console.error('Error fetching classes:', error);
//             });
//     }, []);

//     return (
//         <div className="container mx-auto mt-8">
//             <div className="grid grid-cols-4 gap-4">
//                 {popularClasses.map((cls) => (
//                     <div key={cls._id} className="p-4 bg-white shadow rounded-lg">
//                         <img
//                             src={cls.classImage}
//                             alt={cls.className}
//                             className="w-full h-40 object-cover mb-4 rounded-lg"
//                         />
//                         <h3 className="text-lg font-semibold">{cls.className}</h3>
//                         <p className="text-sm text-gray-600 mb-2">Instructor: {cls.displayName}</p>
//                         <p className="text-sm text-gray-600 mb-2">Price: ${cls.price}</p>
//                         <p className="text-sm text-gray-600 mb-2">Available Seats: {cls.availableSeats}</p>
//                         {/* <p className="text-sm text-gray-600 mb-2">Status: {cls.status}</p>
//                         <p className="text-sm text-gray-600 mb-2">Feedback: {cls.feedback}</p> */}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-center">
//                 <Link to="/classPage" className="text-blue-500 font-semibold">
//                     See More Classes
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default PopularClasses;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        axios
            .get('https://smc-server.vercel.app/classes')
            .then((response) => {
                const approvedClasses = response.data.filter(
                    (cls) => cls.status === 'approved' && parseInt(cls.availableSeats) > 0
                );
                setPopularClasses(approvedClasses.slice(0, 4));
            })
            .catch((error) => {
                console.error('Error fetching classes:', error);
            });
    }, []);

    return (
        <div className="container mx-auto mt-8 grid grid-cols-2 gap-4">
            {popularClasses.map((cls) => (
                <div key={cls._id} className="p-4 bg-white shadow rounded-lg">
                    <img
                        src={cls.classImage}
                        alt={cls.className}
                        className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-semibold">{cls.className}</h3>
                    <p className="text-sm text-gray-600 mb-2">Instructor: {cls.displayName}</p>
                    <p className="text-sm text-gray-600 mb-2">Price: ${cls.price}</p>
                    <p className="text-sm text-gray-600 mb-2">Available Seats: {cls.availableSeats}</p>
                    {/* <p className="text-sm text-gray-600 mb-2">Status: {cls.status}</p>
          <p className="text-sm text-gray-600 mb-2">Feedback: {cls.feedback}</p> */}
                </div>
            ))}
            <div className="mt-4 text-center col-span-2">
                <Link to="/classPage" className="text-blue-500 font-semibold">
                    See More Classes
                </Link>
            </div>
        </div>
    );
};

export default PopularClasses;
