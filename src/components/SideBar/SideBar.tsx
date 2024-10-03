const SideBar = ({ children }: any) => {
    return (
      <div className="grid grid-cols-12">
        {/* Sidebar section */}
        <section className="col-span-2 bg-red-500 p-4 h-screen">
          {/* Sidebar content */}
          <p>Side bar link</p>
        </section>
  
        {/* Main content section */}
        <section className="col-span-10 p-4">
          {children}
        </section>
      </div>
    );
  };
  
  export default SideBar;
  