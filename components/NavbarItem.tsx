'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

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
}
