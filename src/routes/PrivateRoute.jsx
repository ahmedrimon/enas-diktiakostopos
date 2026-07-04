import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {

    const { loading, user } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children;
}
