const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      review{params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
