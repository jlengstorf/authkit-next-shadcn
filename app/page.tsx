import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SharedHeader } from '@/components/shared-header';
import { getUser } from './auth';

export default async function Home() {
	const { isAuthenticated } = await getUser();

	return (
		<>
			<SharedHeader />
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
							yet. But... since you’re here, why don’t you sign up and give us a
							try?
						</p>
						<p className="max-w-[750px] mt-1 text-xl">
							<Link href="/dashboard">
								<Button>Log in</Button>
							</Link>
						</p>
					</>
				)}
			</section>
		</>
	);
}
