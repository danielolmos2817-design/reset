import React from 'react';
import { Users, UserCheck, UserX, Shield } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { DataTable } from '../../components/ui/DataTable';
import { mockUsers } from '../../utils/mockData';

export const ManageAmbassadors: React.FC = () => {
    // Simulate President Logged In
    const currentPresident = mockUsers[1]; // Pastor Emmanuel Adebayo (Assoc: Ikeja Association)

    // Filter for ambassadors ONLY in this president's association
    const ambassadors = mockUsers.filter(u =>
        u.role === 'ambassador' &&
        u.association === currentPresident.association
    );

    const columns = [
        {
            header: 'Ambassador',
            cell: (user: typeof mockUsers[0]) => (
                <div>
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-xs text-slate-400">{user.email}</div>
                </div>
            )
        },
        {
            header: 'Code',
            cell: (user: typeof mockUsers[0]) => (
                <span className="font-mono text-gold-500">{user.ambassador_code}</span>
            )
        },
        {
            header: 'Rank',
            cell: (user: typeof mockUsers[0]) => (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gold-500/10 text-gold-500">
                    {user.rank}
                </span>
            )
        },
        {
            header: 'Status',
            cell: (user: typeof mockUsers[0]) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
                    }`}>
                    {user.status.toUpperCase()}
                </span>
            )
        },
        {
            header: 'Joined',
            cell: (user: typeof mockUsers[0]) => (
                <span className="text-slate-300">
                    {new Date(user.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric'
                    })}
                </span>
            )
        },
        {
            header: 'Actions',
            cell: () => (
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        View Profile
                    </Button>
                    {/* Placeholder for Approve action logic - to be connected to backend */}
                </div>
            )
        }
    ];

    const stats = [
        { label: 'Total Ambassadors', value: ambassadors.length, color: 'gold', icon: Users },
        { label: 'Active', value: ambassadors.filter(a => a.status === 'active').length, color: 'green', icon: UserCheck },
        { label: 'Inactive', value: ambassadors.filter(a => a.status === 'inactive').length, color: 'red', icon: UserX },
        { label: 'This Month', value: 0, color: 'blue', icon: Shield } // Reset mock stat
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-bold text-white">Manage Ambassadors</h1>
                <p className="text-slate-400">View and manage ambassadors in <span className="text-gold-500">{currentPresident.association}</span></p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                        </div>
                        <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                        <p className={`text-2xl font-bold text-${stat.color}-500`}>{stat.value}</p>
                    </Card>
                ))}
            </div>

            {/* Ambassadors Table */}
            <Card>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                        <Users className="w-5 h-5 mr-2 text-gold-500" />
                        Association Members
                    </h3>
                </div>

                <DataTable
                    data={ambassadors}
                    columns={columns}
                />
            </Card>
        </div>
    );
};
