import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TeamSwitcher } from '@/components/team-switcher';
import { MainNav } from '@/components/main-nav';
import { Search } from '@/components/search';
import { UserNav } from '@/components/user-nav';
import { getUser, getAuthUrl } from './auth';

export default async function Home() {
	const { isAuthenticated, user } = await getUser();
	const authKitUrl = getAuthUrl();

	return (
		<>
			<div className="flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
						{isAuthenticated && user ? (
							<TeamSwitcher user={user} />
						) : (
							<Link href={authKitUrl}>
								<Button>Log In</Button>
							</Link>
						)}
						<MainNav className="mx-6" currentRoute="/" />
						<div className="ml-auto flex items-center space-x-4">
							<Search />
							{isAuthenticated && user ? <UserNav user={user} /> : null}
						</div>
					</div>
				</div>
				<section className="flex max-w-[980px] flex-col items-start gap-2 mt-12 mx-auto px-4 pt-8 page-header pb-8">
					{isAuthenticated ? (
						<>
							<h1 className="text-5xl font-bold leading-tight tracking-tighter">
								So stealthy you can call us Bigfoot
							</h1>
							<p className="max-w-[750px] text-xl text-muted-foreground">
								You’re now part of the stealthiest startup in tech. We’re
								pre-seed, pre-revenue, and pre-product but{' '}
								<strong>we know how to get people hyped</strong>.
							</p>
							<p className="max-w-[750px] text-xl text-muted-foreground">
								So <em>don’t tell anyone about us yet</em>.
							</p>
							<p className="max-w-[750px] mt-1 text-xl">
								<Link href="/dashboard">
									<Button>Go to your dashboard</Button>
								</Link>
							</p>
						</>
					) : (
						<>
							<h1 className="text-5xl font-bold leading-tight tracking-tighter">
								What will you build?
							</h1>
							<p className="max-w-[750px] text-xl text-muted-foreground">
								This startup is so deep in stealth mode we haven’t even named it
								yet. But... since you’re here, why don’t you sign up and give us
								a try?
							</p>
							<p className="max-w-[750px] mt-1 text-xl">
								<Link href={authKitUrl}>
									<Button>Log in</Button>
								</Link>
							</p>
						</>
					)}
				</section>
			</div>
		</>
	);
}
