import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr] lg:grid-cols-[16rem_1fr] h-full gap-12">
      <div className="lg:sticky lg:top-[-2rem] lg:h-screen lg:w-[16rem] z-10 sm:w-full lg:ml-[-2rem]">
        <SideNavigation />
      </div>
      <div className="py-4 px-4 sm:px-6 md:px-8 lg:mr-[14rem] lg:pt-6">
        <div>{children}</div>
      </div>
    </div>
  );
}
