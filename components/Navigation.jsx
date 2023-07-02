import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <div>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/users'>Usuarios</Link>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
