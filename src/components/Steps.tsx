import tickIcon from '@assets/icons/tick-circle.svg';
import { ContainerOuter } from './Container';
import { steps } from '@helpers/constants';

export function Steps(): JSX.Element {
    const bgColor = (status: string) => {
        switch (status) {
            case 'done':
                return 'bg-solid-quaternary';
            case 'current':
                return 'bg-solid-tertiary cursor-pointer';
            case 'next':
                return 'bg-white border-2 border-surface-tertiary cursor-pointer';
        }
    };

    return (
        <ContainerOuter className="w-full">
            <div className="flex justify-ceneter items-center w-full flex-col relative">
                <div className="flex justify-center items-center w-full flex-col py-10">
                    <h1 className="text-title-lg text-primary font-light text-center tracking-normal">
                        Wait ! your order in progress.
                    </h1>
                    <p className="text-subtitle text-primary font-extralight tracking-normal mt-4 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                </div>
                <div className="flex justify-between items-center w-full">
                    {steps.map((step, index) => (
                        <div
                            className="flex items-center gap-3 flex-col lg:flex-row
                        "
                            key={index}
                        >
                            <div className="relative">
                                <div
                                    className={`w-9 h-9 rounded-full flex justify-center items-center  ${bgColor(
                                        step.status
                                    )}`}
                                >
                                    {step.status === 'done' ? (
                                        <img
                                            src={tickIcon}
                                            alt="tick"
                                            className="w-4 h-4"
                                        />
                                    ) : (
                                        <p
                                            className={`
                                            ${
                                                step.status === 'next'
                                                    ? 'text-tertiary'
                                                    : 'text-white'
                                            }
                                            `}
                                        >
                                            {index + 1}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <p
                                className={`text-primary text-center cursor-pointer ${
                                    step.status === 'current' ? 'font-bold' : ''
                                }`}
                            >
                                <span className="hidden lg:block">
                                    {'Step ' + (index + 1) + ': ' + step.name}
                                </span>
                                <span className="lg:hidden text-[14px]">{step.name}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerOuter>
    );
}
