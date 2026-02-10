
// Mock hook to replace Firebase auth
import { useState, useEffect } from 'react';

export function useUser() {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(false);

    return { user, isAdmin, isUserLoading };
}

export function useAuth() {
    return null;
}
