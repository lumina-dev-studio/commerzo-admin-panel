import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import NavbarUserOptionSetting from "./NavbarUserOptionSetting";


const NavbarUserOption = () => {
  return (
    <div className=" flex justify-between gap-10 items-center  mt-2 px-3">
      <section className="  md:hidden lg:flex items-center justify-center gap-3">
  <div className="" >
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </div>

  <div >
    <h3 className=" font-bold text-md" style={{ fontFamily: 'var(--font-inter)' }}>Tonu</h3>
    <p className="  text-[13px] text-gray-400" style={{ fontFamily: 'var(--font-inter)' }}>Admin</p>
  </div>

      </section>
      <section>
<NavbarUserOptionSetting/>
      </section>
    </div>
  );
};

export default NavbarUserOption;