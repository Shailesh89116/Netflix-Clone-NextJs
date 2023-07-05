import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps{
     visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {

  const {data: user} = useCurrentUser();

    if(!visible) return null;

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className="flex flex-col gap-3">
        <div className="px-3 group/items flex flex-row gap-3 itmes-center w-full">
            <img src="/images/default-blue.png" alt=""  className='w-8 rounded-md'/>
            <p className='text-white text-sm group-hover/itmes:underline'>{user?.name}</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div className='px-3 text-center text-white text-sm hover:underline' onClick={()=> signOut()}>
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu
