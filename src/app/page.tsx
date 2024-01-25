import Link from 'next/link';

export default function Home() {
  return (
    <div>
      First page
      <Link href='/blog'> Blog</Link>
    </div>
  );
}
