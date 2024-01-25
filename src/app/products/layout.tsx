const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h1 className='bg-red-200 w-full text-yellow-600'>Featured products</h1>
    </div>
  );
};

export default ProductsLayout;
