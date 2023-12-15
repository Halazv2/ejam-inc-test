import { Card } from './Card';
import Avatar from '@assets/images/avatar.png';
import VerfiedIcon from '@assets/icons/verified.svg';
import StarIcon from '@assets/icons/star.svg';

export function Comment() {
    return (
        <Card className="group relative flex flex-col items-start bg-white p-4 rounded">
            <div className="flex justify-start items-center w-full">
                <div className="flex items-center">
                    <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex flex-col ml-2 gap-1">
                    <div className="flex justify-start items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                            <img
                                key={index}
                                src={StarIcon}
                                alt="star"
                                className="w-3 h-3"
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-caption text-primary font-bold tracking-normal">
                            Ken T.
                        </p>
                        <div className="flex justify-center items-center">
                            <img src={VerfiedIcon} alt="verified" className="w-3 h-3" />
                            <p className="text-caption font-light text-validation-success">
                                Verified Customer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Card.Description className="text-body text-primary font-extralight tracking-normal">
                “As soon as the Clarifions arrived I put one in my bedroom. This was late
                in the afternoon. When I went to the bedroom in the evening it smelled
                clean. When I went to bed I felt I could breathe better. Wonderful.”
            </Card.Description>
        </Card>
    );
}
