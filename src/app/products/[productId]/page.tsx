import { Metadata } from 'next';

type props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `product${params.productId}`,
  };
};

const ProductDetails = ({ params }: props) => {
  return (
    <div>
      <h2>detail {params.productId}</h2>
    </div>
  );
};

export default ProductDetails;
