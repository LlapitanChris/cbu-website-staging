"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dancing_script } from '../fonts';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    ClipboardDocumentIcon,
    ClipboardDocumentListIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { store } from '../../../store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

let navigation = [
    { name: 'Planner', href: '/overview/planner', icon: CalendarIcon, current: false },
    { name: 'Orders', href: '/overview/orders', icon: ClipboardDocumentListIcon, current: false },
    { name: 'Invoices', href: '/overview/invoices', icon: ClipboardDocumentIcon, current: false },
    { name: 'FAQ', href: '/overview/faqs', icon: QuestionMarkCircleIcon, current: false },
]
const teams = [
    { id: 1, name: 'My Information', href: '/overview/profile', initial: 'I', current: false },
    { id: 1, name: 'Payment Details', href: '/overview/payment', initial: 'P', current: false },
]

const solutions = [
    { name: 'Blog', description: 'Learn about tips, product updates and company culture', href: '#' },
    {
        name: 'Help center',
        description: 'Get all of your questions answered in our forums of contact support',
        href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it', href: '#' },
    { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userName, setUserName] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        setUserName(window.localStorage.getItem('display_name'));
    }, []);

    if(userName){return (
        <Provider store={store}>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                        <div className="flex h-16 shrink-0 items-center">
                                            {/* <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
                                                alt="Your Company"
                                            /> */}
                                            <h5 className={`mt-6 text-3xl font-extrabold leading-5 text-gray-900 ${dancing_script.className}`}>Catering By Uptown</h5>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <Link href={item.href} legacyBehavior>
                                                                    <a
                                                                        className={classNames(
                                                                            pathname === item.href
                                                                                ? 'bg-gray-50 text-yellow-600'
                                                                                : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50',
                                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                        )}
                                                                    >
                                                                        <item.icon
                                                                            className={classNames(
                                                                                pathname === item.href ? 'text-yellow-600' : 'text-gray-400 group-hover:text-yellow-600',
                                                                                'h-6 w-6 shrink-0'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                        {item.name}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-xs font-semibold leading-6 text-gray-400">Account</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        {teams.map((team) => (
                                                            <li key={team.name}>
                                                                <a
                                                                    href={team.href}
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'bg-gray-50 text-yellow-600'
                                                                            : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={classNames(
                                                                            team.current
                                                                                ? 'text-yellow-600 border-yellow-600'
                                                                                : 'text-gray-400 border-gray-200 group-hover:border-yellow-600 group-hover:text-yellow-600',
                                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                                        )}
                                                                    >
                                                                        {team.initial}
                                                                    </span>
                                                                    <span className="truncate">{team.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            {/* <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
                                alt="Your Company"
                            /> */}
                            <h5 className={`mt-6 text-3xl font-extrabold leading-5 text-gray-900 cbu-logo ${dancing_script.className}`}>Catering By Uptown</h5>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} legacyBehavior>
                                                    <a
                                                        className={classNames(
                                                            pathname === item.href
                                                                ? 'bg-gray-50 text-yellow-600'
                                                                : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <item.icon
                                                            className={classNames(
                                                                pathname === item.href ? 'text-yellow-600' : 'text-gray-400 group-hover:text-yellow-600',
                                                                'h-6 w-6 shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs font-semibold leading-6 text-gray-400">Account</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-50 text-yellow-600'
                                                            : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <span
                                                        className={classNames(
                                                            team.current
                                                                ? 'text-yellow-600 border-yellow-600'
                                                                : 'text-gray-400 border-gray-200 group-hover:border-yellow-600 group-hover:text-yellow-600',
                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                        )}
                                                    >
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <Link href={'/'} legacyBehavior>
                                        <a
                                            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                        >
                                            <img
                                                className="h-8 w-8 rounded-full bg-gray-50"
                                                src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt=""
                                            />
                                            <span className="sr-only">Your profile</span>
                                            <span aria-hidden="true">{userName}</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            className="h-8 w-8 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </a>
                </div>

                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </Provider>
    )
    }
    else {
        return (
            <div>Loading...</div>
        );
    }
}
