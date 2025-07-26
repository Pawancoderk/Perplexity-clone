"use client"
import { UserDetailContext } from '@/Context/UserDetailContext'
import { supabase } from '@/services/Supabse'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Provider = ({ children }) => {
  const { user } = useUser()
  useEffect(() => {
    user && CreateNewUser();
  }, [user])
  const CreateNewUser = async () => {
    let { data: Users, error } = await supabase
      .from('Users')
      .select('*')
      .eq('email', user?.primaryEmailAddress.emailAddress);
    // console.log(Users)
    if (Users.length == 0) {

      const { data, error } = await supabase
        .from('Users')
        .insert([
          {
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
          }
        ])
        .select()
      console.log(data)

    }

  }
  return (
    <UserDetailContext.Provider value={{}}>
        <div className='w-full'>
      {children}
      </div>
        </UserDetailContext.Provider>

  )

}

export default Provider