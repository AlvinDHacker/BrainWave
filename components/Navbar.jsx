"use client";
// import { getAuth, signOut } from "firebase/auth"
import { useEffect, useLayoutEffect, useState } from "react";
import { Home, GraduationCap, GalleryVerticalEnd, User2 } from "lucide-react";
// import app from "@/util/firebase"
// import { useRouter } from "next/router"
import Link from "next/link";
// import { onAuthStateChanged } from "firebase/auth"

// const auth = getAuth(app)

export default function Navbar() {
  // const router = useRouter()
  // const [isAuth, setIsAuth] = useState(false)

  // useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //             setIsAuth(true);
  //         } else {
  //             setIsAuth(false);
  //         }
  //     });

  //     return () => unsubscribe();
  // });

  // const handleLogout = () => {
  //     signOut(auth).then(() => { window.location.replace('/') })
  // }

  // const handleLogin = () => {
  //     window.location.replace('/login')
  // }

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="dark w-full" style={{ zIndex: "5" }}>
        <nav className="bg-white sticky top-0 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="#" className="flex items-center">
              <img
                src="img/logo.png"
                className="h-8 mr-3"
                alt="BrainWave Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BrainWave
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded="false"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={handleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {nav ? (
              // <!-- drawer component -->
              <div
                //   id="drawer-navigation"
                className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
                style={{ zIndex: "5" }}
                // tabindex="-1"
              >
                <div className="pt-2 pb-4 overflow-y-auto">
                  <ul className="space-y-2 font-medium">
                    <li className="mb-5">
                      <Link href="#" className="flex items-center">
                        <img
                          src="img/logo.png"
                          className="h-8 mr-3"
                          alt="BrainWave Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                          BrainWave
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        onClick={handleNav}
                      >
                        <Home />
                        <span className="ml-3">Home</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/courses"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        onClick={handleNav}
                      >
                        <GraduationCap />
                        <span className="ml-3">Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/certificates"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        onClick={handleNav}
                      >
                        <GalleryVerticalEnd />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Certificates
                        </span>
                      </Link>
                    </li>
                    <li>
                      {/* {isAuth ? <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}> <User2/> Logout</button>
                                                : <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}> <User2/> Login</button>} */}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  {/* {isAuth ? <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
                                        : <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}>Login</button>} */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
