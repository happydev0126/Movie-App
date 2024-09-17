import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div suppressHydrationWarning={true} className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItem title='Trending' param='trending' />
      <NavbarItem title='Top Rated' param='top-rated' />
      <NavbarItem title='Popular' param='popular' />
      <NavbarItem title='Upcoming' param='upcoming' />
    </div>
  );
}