import { useEffect, useState } from 'react';

const mediaQueryCache = new Map<string, MediaQueryList>();

/**
 * Optimized useMediaQuery with shared MediaQueryList instances.
 * Prevents creating duplicate listeners for the same query.
 */
export function useMediaQuery(query: string): boolean {
    const getMediaQuery = () => {
        if (typeof window === 'undefined') return null;
        if (!mediaQueryCache.has(query)) {
            mediaQueryCache.set(query, window.matchMedia(query));
        }
        return mediaQueryCache.get(query)!;
    };

    const [matches, setMatches] = useState(() => {
        return getMediaQuery()?.matches ?? false;
    });

    useEffect(() => {
        const mql = getMediaQuery();
        if (!mql) return;

        setMatches(mql.matches);

        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [query]);

    return matches;
}
