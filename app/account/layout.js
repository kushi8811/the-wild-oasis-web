import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[16rem_1fr] h-full gap-12">
      <div className="sm:col-span-2 sm:flex justify-center">
        <SideNavigation />
      </div>
      <div className="py-4 px-4 sm:px-6 md:px-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
