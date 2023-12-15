import { ContainerOuter } from '@components/Container';
import Lock from '@assets/icons/lock.svg';

export function Footer() {
    return (
        <footer className="flex-none bg-solid-primary">
            <ContainerOuter>
                <div className="border-t border-zinc-100 py-7 ">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-caption font-medium text-white dark:text-zinc-200">
                            <p>Copyright &copy; {new Date().getFullYear()}</p>|
                            <p>Clarifionsupport@clarifion.com</p>
                        </div>
                        <p className="text-sm text-zinc-400 dark:text-zinc-500 flex items-center gap-2 text-caption">
                            <img src={Lock} alt="lock" className="w-4 h-4 mr-1" />
                            Secure 256-bit SSL encryption.
                        </p>
                    </div>
                </div>
            </ContainerOuter>
        </footer>
    );
}
