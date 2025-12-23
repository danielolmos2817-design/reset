
export const RANK_HIERARCHY: Record<string, number> = {
    'Page': 1,
    'Squire': 2,
    'Knight': 3,
    'Ambassador': 4,
    'Ambassador Plenipotentiary': 5
};

export const PASSCODES = {
    president: 'pres123',
    super_admin: 'admin123'
};

export const isEligible = (userRank: string, requiredRank: string): boolean => {
    const userLevel = RANK_HIERARCHY[userRank] || 0;
    const requiredLevel = RANK_HIERARCHY[requiredRank] || 0;
    return userLevel >= requiredLevel;
};

export const generateUniqueId = (role: string): string => {
    const random = Math.floor(1000 + Math.random() * 9000); // 4 digit random number
    
    switch (role) {
        case 'super_admin':
            return `OGBC/RA/ADMIN/${random}`;
        case 'president':
            return `OGBC/RA/PRES/${random}`;
        case 'ambassador':
        default:
            return `OGBC/RA/${random}`;
    }
};
