import { Button } from "@/components/ui/button";
import { removeFromCookies } from "@/Services/Action/auth.service";


const NavbarLogOut = () => {
    const logOutHandler = () => {
        removeFromCookies()
        window.location.reload(); // Correctly reload the window
    };

    return (
        <div>
            <Button onClick={logOutHandler}>Log Out</Button> {/* Added label for the button */}
        </div>
    );
};

export default NavbarLogOut;
