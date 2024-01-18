const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h2>detail {params.productId}</h2>
    </div>
  );
};

export default ProductDetails;
