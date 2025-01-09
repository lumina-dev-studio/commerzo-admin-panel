const NavbarUserOption = () => {
    return (
        <div className=" flex justify-between gap-10 items-center  mt-2 px-3">
            <section className="  md:hidden lg:flex items-center justify-center gap-3">
                <div className="bg-[#51C0FF]">

                </div>
                <div>
                    <h3 className=" font-bold text-md" style={{fontFamily: 'var(--font-inter)'}}>Tonu</h3>
                    <p className="  text-[13px] text-gray-400" style={{fontFamily: 'var(--font-inter)'}}>Admin</p>
                </div>
            </section>
        </div>
    );
};

export default NavbarUserOption;