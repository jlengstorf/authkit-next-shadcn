import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TeamSwitcher } from '@/components/team-switcher';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { getUser, getAuthUrl } from '@/app/auth';

export async function SharedHeader() {
	const { isAuthenticated, user } = await getUser();
	const authKitUrl = getAuthUrl();

	return (
		<div className="border-b">
			<div className="flex h-16 items-center px-4">
				{isAuthenticated && user ? (
					<TeamSwitcher user={user} />
				) : (
					<Link href={authKitUrl}>
						<Button>Log In</Button>
					</Link>
				)}
				<MainNav className="mx-6" />
				<div className="ml-auto flex items-center space-x-4">
					{isAuthenticated && user ? <UserNav user={user} /> : null}
				</div>
			</div>
		</div>
	);
}
