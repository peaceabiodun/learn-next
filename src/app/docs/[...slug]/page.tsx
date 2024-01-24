const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 2) {
    return (
      <h2>
        vewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h2>
    );
  } else if (params.slug.length === 1) {
    return <h1>viewing docs for feature {params.slug[0]}</h1>;
  }
  return <div>Docs homepage</div>;
};

export default Docs;
