import { WorkOS } from '@workos-inc/node';
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { getJwtSecretKey } from '../auth';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export async function GET(request: Request) {
	const url = new URL(request.url);
	const code = url.searchParams.get('code') || '';

	try {
		const { user } = await workos.users.authenticateWithCode({
			clientId: process.env.WORKOS_CLIENT_ID || '',
			code,
		});

		const token = await new SignJWT({ user })
			.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
			.setIssuedAt()
			.setExpirationTime('1h')
			.sign(getJwtSecretKey());

		// remove the code from the redirect URL
		url.pathname = '/dashboard';
		url.searchParams.delete('code');

		const response = NextResponse.redirect(url);

		response.cookies.set({
			name: 'token',
			value: token,
			httpOnly: true,
			path: '/',
		});

		return response;
	} catch (error) {
		return NextResponse.json(error);
	}
}
