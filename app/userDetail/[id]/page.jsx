'use client';

import axios from 'axios';

async function fetchDetailData(id) {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const users = response.data.data;
    return users;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

async function userDetail({ params }) {
  console.log(params);
  let user = await fetchDetailData(params.id);
  return (
    <div>
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
    </div>
  );
}

export default userDetail;
