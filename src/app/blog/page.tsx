'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Blog: any = () => {
  const pathname = usePathname();
  // const isActive = pathname.startsWith(ink.href)
  return (
    <div>
      My blog
      <Link href='/' className='font-bold text-red-500'>
        Home
      </Link>
      <Link href='/blog/second'>second</Link>
    </div>
  );
};

export default Blog;
