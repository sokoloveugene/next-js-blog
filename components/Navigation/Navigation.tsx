import Link from "next/link";
import { NavBar, NavBarLink } from "../ui/uiComponents";

const Navigation = () => {
  return (
    <NavBar>
      <Link href="/">
        <NavBarLink>Home</NavBarLink>
      </Link>
      <Link href="/posts/new">
        <NavBarLink>Create</NavBarLink>
      </Link>
      <Link href="/posts/saved">
        <NavBarLink>Saved</NavBarLink>
      </Link>
    </NavBar>
  );
};

export default Navigation;
