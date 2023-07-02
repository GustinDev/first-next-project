'use client';

import { useRouter } from 'next/navigation';

const UserList = ({ users }) => {
  const router = useRouter();

  return (
    <div className='grid grid-cols-3 gap-4'>
      {users.map((user) => (
        <div
          key={user.id}
          className='bg-white p-4 shadow-md rounded-xl'
          onClick={() => {
            router.push(`userDetail/${user.id}`);
          }}
        >
          <img
            src={user.avatar}
            alt={user.first_name}
            className='w-24 h-24 mx-auto rounded-full mb-4'
          />
          <div className='text-center'>
            <h2 className='text-lg font-semibold text-black'>{`${user.first_name} ${user.last_name}`}</h2>
            <p className='text-gray-500'>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
