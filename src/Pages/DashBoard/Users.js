import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://radiant-dusk-74282.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
//     const [user] = useAuthState(auth);
    
//     const navigate = useNavigate()
//     // }
// const [users, setUser]=useState([])
//     useEffect(() => {
//         if (user) {
//             fetch('https://radiant-dusk-74282.herokuapp.com/user', {
//                 method: 'GET',
//                 headers: {
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => {
//                     console.log('res', res);
//                     if (res.status === 401 || res.status === 403) {
//                         // signOut(auth);
//                         // localStorage.removeItem('accessToken');
//                         navigate('/');
//                     }
//                     return res.json()
//                 })
//                 .then(data => {

//                     setUser(data)
//                 });
//         }
//     }, [user])
    return (
        <div>
            <h2 className="text-2xl">All Users: {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                           users?.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;