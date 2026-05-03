import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

export async function proxy(request) {
  console.log(request, 'from proxy')
  const {pathname}=request.nextUrl
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    const signinUrl = new URL('/signin', request.url)
    signinUrl.searchParams.set('callbackUrl',pathname)
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/all-courses/:path+',
}