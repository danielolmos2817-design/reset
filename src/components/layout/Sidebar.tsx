import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, CreditCard, Award, Image, Settings, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';
import logo from '../../assets/logo.png';

interface SidebarProps {
    role?: 'ambassador' | 'admin' | 'superadmin' | 'president';
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const commonLinks = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    ];

    const ambassadorLinks = [
        { name: 'My Exams', icon: FileText, path: '/ambassador/exams' },
        { name: 'Results', icon: Award, path: '/ambassador/results' },
        { name: 'Payments', icon: CreditCard, path: '/ambassador/payments' },
        { name: 'Gallery', icon: Image, path: '/gallery' },
    ];

    const adminLinks = [
        { name: 'Ambassadors', icon: Users, path: '/admin/ambassadors' },
        { name: 'Approvals', icon: FileText, path: '/admin/approvals' },
        { name: 'Payments', icon: CreditCard, path: '/admin/payments' },
        { name: 'Camp Reg', icon: Users, path: '/admin/camp-registration' },
    ];

    const superAdminLinks = [
        { name: 'Manage Users', icon: Users, path: '/super/users' },
        { name: 'Exams', icon: FileText, path: '/super/exams' },
        { name: 'Finance', icon: CreditCard, path: '/super/finance' },
        { name: 'Settings', icon: Settings, path: '/super/settings' },
    ];


    const presidentLinks = [
        { name: 'Members', icon: Users, path: '/president/members' },
        { name: 'Approvals', icon: FileText, path: '/president/approvals' },
        { name: 'Payments', icon: CreditCard, path: '/president/payments' },
    ];

    const links = [
        ...commonLinks,
        ...(role === 'ambassador' ? ambassadorLinks : []),
        ...(role === 'admin' ? adminLinks : []),
        ...(role === 'superadmin' ? superAdminLinks : []),
        ...(role === 'president' ? presidentLinks : []),
    ];

    return (
        <aside className="w-64 bg-navy-900 border-r border-navy-800 flex-shrink-0 relative z-20 hidden md:flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-navy-800">
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Royal Ambassadors"
                        className="h-8 w-auto"
                    />
                    <span className="font-bold text-xl text-white">RA Portal</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => cn(
                            "flex items-center px-4 py-3 rounded-lg transition-all duration-200 group",
                            isActive
                                ? "bg-navy-800 text-gold-500 border-l-4 border-gold-500 shadow-md"
                                : "text-slate-400 hover:bg-navy-800/50 hover:text-white"
                        )}
                    >
                        <link.icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-navy-800">
                <button className="flex items-center w-full px-4 py-2 text-red-400 hover:bg-navy-800 rounded-lg transition-colors">
                    <LogOut className="w-5 h-5 mr-3" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};
