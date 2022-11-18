import Logo from "./components/logo";
import Profile from "./components/profile";

function Header(input: { name: string }) {
  return (
    <>
      <Logo name={input.name} />
      <Profile />
    </>
  );
}

export default Header;
