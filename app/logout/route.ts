import { signOut } from '@/app/auth';
import { NextResponse } from 'next/server';

export function GET(request: Request) {
	const url = new URL(request.url);
	url.pathname = '/';
	const response = NextResponse.redirect(url);

	signOut();

	return response;
}
