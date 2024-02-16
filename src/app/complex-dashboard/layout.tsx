const DashboardLayout = ({
  children,
  notifications,
  users,
  revenue,
  logins,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  logins: React.ReactNode;
}) => {
  //these are parallel routes. they help with subnavigation. the @notification, @user ...  are parallel routes.
  //instead of importing notifications page you can just pass in into the layouts page as a prop as it is here. it is good for pages that have diffrent segments like a complex dashboard.

  const IsUserLoggedIn = true; //asuming the user is logged into the application.
  return (
    <div>
      <div>{children}</div>
      {IsUserLoggedIn ? (
        <>
          <div>{users}</div>
          <div className='bg-red-400'>{notifications}</div>
          <div className='bg-slate-500'>{revenue}</div>
        </>
      ) : (
        logins
      )}
    </div>
  );
};

export default DashboardLayout;
