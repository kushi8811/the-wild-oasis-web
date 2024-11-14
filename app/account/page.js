import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h2 className="font-semibold text-2xl sm:text-3xl text-accent-400 mb-4 sm:mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
