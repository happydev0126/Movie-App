import Link from 'next/link';
import { FC } from 'react';

interface MenuItemProps {
  title: string;
  address: string;
  Icon: React.ElementType;
}

const MenuItem: FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className="text-2xl sm:hidden" />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
};

export default MenuItem;
