import React from 'react';
import { Card } from './Card';
import { type LucideIcon } from 'lucide-react';

interface StatItem {
    label: string;
    value: string | number;
    icon: LucideIcon;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
}

interface StatsGridProps {
    stats: StatItem[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <Card key={index} className="relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white mt-2">{stat.value}</h3>
                            {stat.change && (
                                <p className={`text-xs mt-2 font-medium ${stat.trend === 'up' ? 'text-green-400' :
                                    stat.trend === 'down' ? 'text-red-400' : 'text-slate-400'
                                    }`}>
                                    {stat.change}
                                </p>
                            )}
                        </div>
                        <div className="p-3 bg-navy-700/50 rounded-lg group-hover:bg-gold-500/20 group-hover:text-gold-500 transition-colors">
                            <stat.icon className="w-6 h-6 text-slate-300 group-hover:text-gold-500" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-gold-500 w-0 group-hover:w-full transition-all duration-500" />
                </Card>
            ))}
        </div>
    );
};
