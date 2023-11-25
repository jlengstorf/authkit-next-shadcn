import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { WorkOS, type User } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export function getJwtSecretKey() {
	const secret = process.env.JWT_SECRET_KEY;

	if (!secret) {
		throw new Error('JWT_SECRET_KEY is not set');
	}

	return new Uint8Array(Buffer.from(secret, 'base64'));
}

export async function verifyJwtToken(token: string) {
	try {
		const { payload } = await jwtVerify(token, getJwtSecretKey());
		return payload;
	} catch (error) {
		return null;
	}
}

// Verify the JWT and return the user
export async function getUser(): Promise<{
	isAuthenticated: boolean;
	user?: User | null;
}> {
	const token = cookies().get('token')?.value;

	if (token) {
		const verifiedToken = await verifyJwtToken(token);
		if (verifiedToken) {
			return {
				isAuthenticated: true,
				user: verifiedToken.user as User | null,
			};
		}
	}

	return { isAuthenticated: false };
}

export function getAuthUrl() {
	return workos.sso.getAuthorizationURL({
		clientID: process.env.WORKOS_CLIENT_ID || '',
		provider: 'authkit',
		redirectURI: process.env.WORKOS_REDIRECT_URI!,
	});
}
