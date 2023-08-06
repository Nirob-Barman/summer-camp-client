
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useEnrolledClasses = () => {

    const { user, loading } = useAuth();

    console.log("Client Email: ", user?.email);

    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // const res = await fetch(`https://smc-server.vercel.app/selectClasses?email=${user.email}`)
            const res = await fetch(`https://smc-server.vercel.app/selectClasses/${user.email}`);
            return res.json();
        },
    })

    return [enrolledClasses, refetch]
};

export default useEnrolledClasses;