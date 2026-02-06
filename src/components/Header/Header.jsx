import { Link } from "react-router-dom";
import { Container, Footer,Logo,LogoutBtn} from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const authStatus=useSelector((state)=>state.auth.status);
    const navigate=useNavigate();
    const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">MegaBlog</h1>
    </header>
  );
}