// import { Link } from "react-router-dom";
// import Logo from "../images/DiveToTech-1-plain-design2.png"; // Adjust path if necessary

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
//         {/* Logo on the left with increased size */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={Logo}
//             alt="DiveToTech Logo"
//             className="w-50 h-50 md:w-100 md:h-20 object-contain" // Increased from w-10/h-10 to w-16/h-16, md:w-12/h-12 to md:w-20/h-20
//           />
//         </Link>

//         {/* Menu items on the right */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link
//             to="/courses"
//             className="text-gray-700 hover:text-primary transition-colors"
//           >
//             Courses
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-700 hover:text-primary transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-700 hover:text-primary transition-colors"
//           >
//             Contact
//           </Link>
//           <Link to="/register">
//             <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition-colors">
//               Register
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;