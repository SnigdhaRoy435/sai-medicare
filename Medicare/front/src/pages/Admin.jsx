import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const Admin = ({ match }) => {
    const { params: { id } } = match;

    const [users, setUser] = useState([]);
    const [user, setU] = useState([]);

    useEffect(() => {
        if (localStorage.usertoken) {
            const getUser = (id) => {

                //console.log(userId)

                return axios.get(`/user/${id}`)
                    .then(res => {
                        //setUser(res.data.user)

                        return res;
                    })
                    .catch(err => {
                        return err;
                    })
            }


            function getData() {
                const token = localStorage.usertoken;
                // const id = localStorage.id;
                const decoded = jwt_decode(token)
                getUser(decoded.uid).then(res => {
                    //console.log(decoded)

                    setUser(res.data.user);
                    // console.log(res.data.user)

                })

            }

            getData();

        }

        const allUserDetails = () => {
            return axios.get('/user').then(res => {
                setU(res.data.users);
                console.log(res.data.users)
            })
        }

        allUserDetails();

    }, [])


    // console.log(users)

    return (
        <>
            <h1>Admin Page</h1>

            {
                users.map((u, i) => {
                    if (u.role == 1) {
                        return (
                            <>
                                <h3 className="text-dark text-center">People registered in your website</h3><br />
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Username</td>
                                                    <td>Email</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    user.map((u, i) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>{u.username}</td>
                                                                    <td>{u.email}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                {
                                    users.map((user) => {
                                        return (
                                            <>
                                                <h1>Your name is {user.username}</h1>
                                                <h1>Your email is {user.email}</h1>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                })
            }

        </>
    )
}

export default Admin;