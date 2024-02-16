import Link from 'next/link';

const Notification = () => {
  //when the Link archived is clicked, it will navigate to the archived notification page while still maintaining the users and revenue that has being rendered on the layout page. basically just the nofifications page will be rerouted and the url will also change to "/complex-dashboard/archived". but the other things on the layout page stays the same regardless.

  //the archiveDNotification componet is an unmatched slot. it doesnt have that @symbol
  //however, we need to make a default.tsx page because when you refresh the archived page next.js will be looking for a default page to render for the slots on initial load.

  // a default.tsx file serves as a fallback to render content when the framework cannot retrive a slot's active state from the current url. especially after reload.
  return (
    <div>
      Notification
      <Link href='/complex-dashboard/archived'>Archived</Link>
    </div>
  );
};

export default Notification;
