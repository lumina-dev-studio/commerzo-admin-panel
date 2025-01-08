// src/middleware.ts
import {NextResponse} from 'next/server';
import {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
    // Get the access token from cookies
    const token = request.cookies.get('accessToken') || null;

    // Define the paths you want to protect (all routes under /dashboard)
    const protectedPaths = ['/', '/dashboard', '/dashboard/:path*'];

    // Check if the request is for a protected path
    if (protectedPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !token) {
        // Redirect to the login page if the token is not present
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

// Configure the matcher to apply middleware to specific paths
export const config = {
    matcher: ['/', '/dashboard/:path*'], // Apply to all dashboard routes
};
