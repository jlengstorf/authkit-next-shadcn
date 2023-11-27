import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function GET(request: Request) {
	const url = new URL(request.url);
	url.pathname = '/';

	const response = NextResponse.redirect(url);

	cookies().delete('token');

	return response;
}
