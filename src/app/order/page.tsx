'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Order() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
    // to navigate back to previous page   router.back();
    // to navigate back to the next page   router.forward();
    // to replace the route with an entirely diffrent route router.replace('/')
    // we can also use replace when we are using the <Link > tag. i.e <Link href={'/'} replace />
  };
  return (
    <div>
      Order product
      <button onClick={handleClick}>place order</button>
    </div>
  );
}
