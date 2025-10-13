import React from 'react'
import Nav from './Nav'
import SidePanel from './SidePanel'

const AddNewUsers = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SidePanel />
        <div className="h-screen w-[78%] framepanel flex flex-col bg-slate-100">
            <Nav title={"ADD NEW USER"} />
            <div className="p-4">
                <div className="w-full p-4 flex flex-col gap-4 bg-white rounded shadow-md">
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className='text-[14px]'>
                                FULL NAME *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="bg-neutral-100 p-2 rounded text-[12px]"
                                placeholder='Enter your full name'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[14px]">
                                EMAIL *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-neutral-100 px-4 py-2 rounded text-[12px]"
                                placeholder='Enter your email address'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-[14px]">
                                PASSWORD *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-neutral-100 px-4 py-2 rounded text-[12px]"
                                placeholder='Enter your password'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="role" className="text-[14px]">
                                ROLE *
                            </label>
                            <select
                                id="role"
                                className="bg-neutral-100 px-4 py-2 rounded text-[12px]"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="insurance">Insurance</option>
                            </select>
                        </div>
                        <button className="bg-blue-400 cursor-pointer text-[14px] hover:bg-blue-300 hover:text-black transition-all duration-300 font-semibold text-white p-2 rounded mt-4">
                            Add User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddNewUsers
