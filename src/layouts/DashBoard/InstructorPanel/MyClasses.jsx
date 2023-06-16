import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { getClasses } from "../../../apis/classeapi";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email)
    const [classes, setClasses] = useState([]);
    console.log("classes", classes);

    useEffect(() => {
        
        getClasses(user?.email)

            .then((classes) => {
                setClasses(classes);
            })
            .catch((error) => {
                console.error("Error fetching classes:", error);
            });
    }, [user?.email]);



    return (
        
        <div className="max-w-2xl mx-auto my-8">
            {classes && classes.length > 0 ? (
                <div className="overflow-hidden border border-gray-200 rounded shadow">
                    <div className="bg-gray-100 px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Class List</h2>
                    </div>
                    <div className="px-4 py-3">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
                                            Class Name
                                        </th>
                                        <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
                                            Status
                                        </th>
                                        <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
                                            Total Enrolled Students
                                        </th>
                                        <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
                                            Feedback
                                        </th>
                                        <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classes.map((classItem, index) => (
                                        <tr
                                            key={index}
                                            className={index % 2 === 0 ? 'bg-white' : 'bg-blue-100'}
                                        >
                                            <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {classItem.classname}
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                                {classItem.status}
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                                {classItem.enrolledStudents}
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                                {classItem.status === 'denied' ? classItem.feedback : '-'}
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap text-sm">
                                                <button className="px-4 py-2 bg-blue-500 text-sm font-semibold text-white rounded-md hover:bg-blue-600">
                                                    Update
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-32">
                    <h2 className="text-lg text-gray-800">No classes available!</h2>
                </div>
            )}
        </div>


        // <div className="max-w-2xl mx-auto my-8">
        //     {classes && classes.length > 0 ? (
        //         <div className="overflow-hidden border border-gray-200 rounded shadow">
        //             <div className="bg-gray-100 px-4 py-3">
        //                 <h2 className="text-xl font-semibold text-gray-800">Class List</h2>
        //             </div>
        //             <div className="px-4 py-3">
        //                 <div className="overflow-x-auto">
        //                     <table className="min-w-full">
        //                         <thead>
        //                             <tr>
        //                                 <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
        //                                     Class Name
        //                                 </th>
        //                                 <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
        //                                     Status
        //                                 </th>
        //                                 <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
        //                                     Total Enrolled Students
        //                                 </th>
        //                                 <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
        //                                     Feedback
        //                                 </th>
        //                                 <th className="py-3 px-6 bg-gray-100 text-sm font-semibold text-gray-600 uppercase">
        //                                     Actions
        //                                 </th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {classes.map((classItem, index) => (
        //                                 <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
        //                                     <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
        //                                         {classItem.classname}
        //                                     </td>
        //                                     <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        //                                         {classItem.status}
        //                                     </td>
        //                                     <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        //                                         {classItem.enrolledStudents}
        //                                     </td>
        //                                     <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        //                                         {classItem.status === 'denied' ? classItem.feedback : '-'}
        //                                     </td>
        //                                     <td className="py-4 px-6 whitespace-nowrap text-sm">
        //                                         <button className="px-4 py-2 bg-blue-500 text-sm font-semibold text-white rounded-md hover:bg-blue-600">
        //                                             Update
        //                                         </button>
        //                                     </td>
        //                                 </tr>
        //                             ))}
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>
        //         </div>
        //     ) : (
        //         <div className="flex items-center justify-center h-32">
        //             <h2 className="text-lg text-gray-800">No classes available!</h2>
        //         </div>
        //     )}
        // </div>

    );
};

export default MyClasses;
