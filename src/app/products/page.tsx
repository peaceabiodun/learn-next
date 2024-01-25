import Link from 'next/link';

const ProductList = () => {
  return (
    <div>
      <Link href='products/1'>Product 1</Link>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
};

export default ProductList;
