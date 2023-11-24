import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function GET(request: Request) {
	const url = new URL(request.url);
	url.port = '';
	url.pathname = '/';
	console.log({ url });
	const response = NextResponse.redirect(url);

	cookies().delete('token');

	return response;
}
