import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://smc-server.vercel.app/users');
            return res.json();
        }
    });

    // Filter users by role === 'instructor'
    const instructors = users.filter(user => user.role === 'instructor');

    return [instructors, loading, refetch];
}

export default useInstructor;
