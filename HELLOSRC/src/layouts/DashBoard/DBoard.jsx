import React from 'react';

// const DBoard = ({ userRole }) => {
const DBoard = () => {

    const userRole = 'admin';

    return (
        <div>
            {userRole === 'admin' && <AdminDashboard />}
            {userRole === 'instructor' && <InstructorDashboard />}
            {userRole === 'user' && <UserDashboard />}
        </div>
    );
};

// const AdminDashboard = () => {
//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             {/* Admin-specific content */}
//         </div>
//     );
// };

// const InstructorDashboard = () => {
//     return (
//         <div>
//             <h1>Instructor Dashboard</h1>
//             {/* Instructor-specific content */}
//         </div>
//     );
// };

// const UserDashboard = () => {
//     return (
//         <div>
//             <h1>User Dashboard</h1>
//             {/* User-specific content */}
//         </div>
//     );
// };

export default DBoard;
