import clsx from 'clsx';

export function Card<T extends React.ElementType = 'div'>({
    as,
    className,
    children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
    as?: T;
    className?: string;
}) {
    let Component = as ?? 'div';

    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </Component>
    );
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
    as,
    children,
    className,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
    as?: T;
}) {
    let Component = as ?? 'h2';

    return (
        <Component className={clsx('text-zinc-800 dark:text-zinc-100', className)}>
            {children}
        </Component>
    );
};

Card.Description = function CardDescription({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={clsx(
                className,
                'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'
            )}
        >
            {children}
        </p>
    );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
    as,
    decorate = false,
    className,
    children,
    ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
    as?: T;
    decorate?: boolean;
}) {
    let Component = as ?? 'p';

    return (
        <Component
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
                decorate && 'pl-3.5'
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
            )}
            {children}
        </Component>
    );
};
