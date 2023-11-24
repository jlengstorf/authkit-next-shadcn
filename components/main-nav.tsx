import Link from 'next/link';

import { cn } from '@/lib/utils';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
	currentRoute: string;
}

export function MainNav({ className, currentRoute, ...props }: MainNavProps) {
	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<Link
				href="/"
				className={`text-sm font-medium ${
					currentRoute !== '/' ? 'text-muted-foreground' : ''
				} transition-colors hover:text-primary`}
			>
				Home
			</Link>
			<Link
				href="/dashboard"
				className={`text-sm font-medium ${
					currentRoute !== '/dashboard' ? 'text-muted-foreground' : ''
				} transition-colors hover:text-primary`}
			>
				Dashboard
			</Link>
		</nav>
	);
}
