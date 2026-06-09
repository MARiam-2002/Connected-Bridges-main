import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInViewOptions {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
    root?: Element | null;
}

type UseInViewReturn = [React.RefObject<Element | null>, boolean];

/**
 * Optimized useInView hook using IntersectionObserver.
 * Respects prefers-reduced-motion: if user prefers reduced motion,
 * elements are immediately considered in-view (no animation delay).
 */
export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
    const {
        threshold = 0,
        rootMargin = '0px',
        triggerOnce = false,
        root = null,
    } = options;

    const ref = useRef<Element | null>(null);
    const [isInView, setIsInView] = useState(false);

    // Respect reduced motion preference — instantly "in view"
    const prefersReducedMotion = useCallback(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setIsInView(true);
            return;
        }

        const element = ref.current;
        if (!element) return;

        // Reuse observer across elements with same options via a simple cache key
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        setIsInView(false);
                    }
                });
            },
            { threshold, rootMargin, root }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce, root, prefersReducedMotion]);

    return [ref, isInView];
}
