// "use client";
// import { authClient, signOut } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const userData = authClient.useSession();
//   const user = userData.data?.user;
//   const [menuOpen, setMenuOpen] = useState(false);

//   console.log(user, "user from navbar");

//   return (
//     <div className="border-b px-2 mb-6">
//       <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full relative">
//         {/* Logo */}
//         <div className="flex gap-2 items-center">
//           <h3 className="font-black text-lg">SkillSphere</h3>
//         </div>

//         {/* Desktop Nav Links */}
//         <ul className="hidden md:flex items-center gap-5 text-sm">
//           <li><Link href={"/"}>Home</Link></li>
//           <li><Link href={"/all-courses"}>All Courses</Link></li>
//           <li><Link href={"/profile"}>My Profile</Link></li>
//         </ul>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex gap-4">
//           {!user && (
//             <ul className="flex items-center gap-3 text-sm">
//               <li>
//                 <Link href={"/signup"}><Button variant="outline">Sign Up</Button></Link>
//               </li>
//               <li>
//                 <Link href={"/signin"}><Button className={"bg-slate-600"}>Sign In</Button></Link>
//               </li>
//             </ul>
//           )}
//           {user && (
//             <div className="flex items-center gap-3">
//               <Avatar>
//                 <Avatar.Image alt={user?.name} src={user?.image} />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>
//               <Link href={"/"}><Button onClick={() => signOut()} variant="danger">Sign Out</Button></Link>
//             </div>
//           )}
//         </div>

//         {/* Hamburger Button (Mobile) */}
//         <button
//           className="md:hidden flex flex-col gap-1.5 p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t pt-3">
//           <ul className="flex flex-col gap-3">
//             <li><Link href={"/"} onClick={() => setMenuOpen(false)}>Home</Link></li>
//             <li><Link href={"/all-courses"} onClick={() => setMenuOpen(false)}>All Courses</Link></li>
//             <li><Link href={"/profile"} onClick={() => setMenuOpen(false)}>My Profile</Link></li>
//           </ul>

//           {!user && (
//             <ul className="flex flex-col gap-2 mt-2">
//               <li>
//                 <Link href={"/signup"} onClick={() => setMenuOpen(false)}>
//                   <Button variant="outline" className="w-full">Sign Up</Button>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={"/signin"} onClick={() => setMenuOpen(false)}>
//                   <Button className={"bg-slate-600 w-full"}>Sign In</Button>
//                 </Link>
//               </li>
//             </ul>
//           )}

//           {user && (
//             <div className="flex items-center gap-3 mt-2">
//               <Avatar>
//                 <Avatar.Image alt={user?.name} src={user?.image} />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>
//               <Link href={"/"} onClick={() => setMenuOpen(false)}>
//                 <Button onClick={() => signOut()} variant="danger">Sign Out</Button>
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client";
import { authClient, signOut } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (href) =>
    pathname === href
      ? "font-semibold text-black border-b-2 border-slate-600 pb-0.5"
      : "text-gray-600 hover:text-black transition-colors";

  return (
    <div className="border-b px-2 mb-6">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full relative">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Link href="/" className={navLinkClass("/")}>Home</Link></li>
          <li><Link href="/all-courses" className={navLinkClass("/all-courses")}>All Courses</Link></li>
          <li><Link href="/profile" className={navLinkClass("/profile")}>My Profile</Link></li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">
          {!user && (
            <ul className="flex items-center gap-3 text-sm">
              <li><Link href="/signup"><Button variant="outline">Sign Up</Button></Link></li>
              <li><Link href="/signin"><Button className="bg-slate-600">Sign In</Button></Link></li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Link href="/"><Button onClick={() => signOut()} variant="danger">Sign Out</Button></Link>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t pt-3">
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className={navLinkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/all-courses" className={navLinkClass("/all-courses")} onClick={() => setMenuOpen(false)}>All Courses</Link></li>
            <li><Link href="/profile" className={navLinkClass("/profile")} onClick={() => setMenuOpen(false)}>My Profile</Link></li>
          </ul>

          {!user && (
            <ul className="flex flex-col gap-2 mt-2">
              <li><Link href="/signup" onClick={() => setMenuOpen(false)}><Button variant="outline" className="w-full">Sign Up</Button></Link></li>
              <li><Link href="/signin" onClick={() => setMenuOpen(false)}><Button className="bg-slate-600 w-full">Sign In</Button></Link></li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-3 mt-2">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Button onClick={() => signOut()} variant="danger">Sign Out</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;