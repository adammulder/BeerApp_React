import { useAuth0 } from "@auth0/auth0-react";
import { ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const LoginButton = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
          <ArrowRightOnRectangleIcon onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="text-black p-4 hover:text-white" />
     
    );
  } else {
    return (
        <ArrowLeftOnRectangleIcon onClick={() => loginWithPopup()} className="text-black p-4 hover:text-white" />
    )
  }
}

export default LoginButton;