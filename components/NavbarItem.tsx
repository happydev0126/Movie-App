'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const movie = searchParams.get('movie');
  const isActive = movie === param;

  return (
    <div suppressHydrationWarning={true}>
    <Link
      className={`hover:text-amber-600 font-semibold ${
        isActive ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''
      }`}
       href={`/?movie=${param}`}
    >
      {title}
    </Link>
    </div>
  );
}
/*
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Link
          className={`hover:text-amber-600 font-semibold ${
            genre === param
              ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
              : ''
          }`}
          href={`/?genre=${param}`}
          aria-label={`Navigate to ${title}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
  */


