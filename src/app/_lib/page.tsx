const lib = () => {
  //when we use _ at the begining of a folder name, the route is a private route and will be excluded in the browser route
  // using () to wrap a a folder name also excludes that partilcular file name from the browser route.
  return <div>private route</div>;
};

export default lib;
