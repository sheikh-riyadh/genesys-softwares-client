import React from 'react';
import { useQuery } from "@tanstack/react-query"
import Spinner from '../../components/Spinner/Spinner';
import { toast } from 'react-hot-toast';
export default function Dashboard() {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/users`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Spinner />
    }

    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure do you want to delete")
        if (agree) {
            fetch(`${process.env.REACT_APP_api_url}/users/${id}`, {
                method: "DELETE",
            }).then(res => res.json()).then(data => {
                refetch()
                toast.success("Deleted user successfull.")
            })
        }
    }



    return (
        <div className="bg-white px-3 md:px-5 lg:px-[40px] xl:px-[91px] py-7 lg:py-[50px] xl:py-[100px]">
            {
                users.length === 0 ?
                    <div className='flex justify-center items-center flex-col gap-5'>
                        <h2 className="text-[32px] text-start uppercase">user not found</h2>
                        <img className='w-8/12' src="/assets/nofound.svg" alt="no_found" />
                    </div>
                    :
                    <div>
                        <h2 className="text-[32px] text-start">User list</h2>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr className="text-center">
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        users?.map(user => {
                                            return <tr className="text-center border-b-2"
                                                key={user?._id}
                                            >
                                                <td>
                                                    <div className="flex items-center space-x-3 justify-center">
                                                        <div>
                                                            <div><p className="font-bold text-center">{user?.fName}</p></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {user?.lName}
                                                </td>
                                                <td>
                                                    {user?.email}
                                                </td>
                                                <td>
                                                    {user?.password}
                                                </td>
                                                <td><button onClick={() => handleDelete(user?._id)} className="bg-[#4E4534] text-white px-6 py-2">Deleted</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-start font-semibold text-2xl">{users?.length === 0 || users?.length === 1 ? `${users?.length} User` : `${users?.length} Users`}</h3>
                    </div>
            }

        </div>
    )
}