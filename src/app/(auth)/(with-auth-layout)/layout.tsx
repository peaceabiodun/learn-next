const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className='bg-red-200 w-full text-yellow-600'>Header Auth</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
