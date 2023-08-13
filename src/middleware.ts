import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    //to get path name
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup';

  const token = request.cookies.get('token')?.value || '';

  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }


}
 

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile',
    '/profile/:path*'
  ],
}