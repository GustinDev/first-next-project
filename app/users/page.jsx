import UserList from '@/components/UserList';
import axios from 'axios';

//Esto se hace del lado del servidor,
async function fetchData() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    const users = response.data.data;
    return users;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

//Aqui usamos los datos, lo mostramos por Terminal.
async function UsersPage() {
  const usersData = await fetchData();

  return (
    <div>
      <h1>Usuarios</h1>
      <UserList users={usersData} />
    </div>
  );
}

export default UsersPage;
