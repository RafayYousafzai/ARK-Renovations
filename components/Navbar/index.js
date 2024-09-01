"use client";

import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Container from "components/container";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import { leftmenu, rightmenu } from "./pages";
import Menu from "./Menu";
import { useRouter } from "next/navigation";

export default function Navbar(props) {
  const router = useRouter();

  const mobilemenu = [...leftmenu, ...rightmenu];

  const [open, setOpen] = useState(false);
  const [selectedSubpages, setSelectedSubpages] = useState([]);

  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <Container>
      <Menu
        open={open}
        selectedSubpages={selectedSubpages}
        toggleMenu={toggleMenu}
      />
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}
                        >
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link
                    href="/"
                    className="w-28 dark:hidden rounded-md align-middle justify-center flex"
                  >
                    <p>Khuram</p>
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">Stablo</span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <div
                        onClick={() =>
                          item?.subpages
                            ? (toggleMenu(),
                              setSelectedSubpages({
                                subpages: item.subpages,
                                label: item.label,
                              }))
                            : router.push(item.href)
                        }
                        key={`${item.label}${index}`}
                        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 cursor-pointer"
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}
                      >
                        <span> {item.label}</span>
                        {item.badge && (
                          <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Fragment key={`${item.label}${index}`}>
                          <div
                            onClick={() =>
                              item?.subpages
                                ? (toggleMenu(),
                                  setSelectedSubpages({
                                    subpages: item.subpages,
                                    label: item.label,
                                  }))
                                : router.push(item.href)
                            }
                            key={`${item.label}${index}`}
                            className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                            target={item.external ? "_blank" : ""}
                            rel={item.external ? "noopener" : ""}
                          >
                            <span> {item.label}</span>
                            {item.badge && (
                              <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </Fragment>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}
