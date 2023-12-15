import { Card } from './Card';
import { ContainerOuter } from './Container';
import { Comment } from './Comment';
import ProductImage from '@assets/images/image-1.png';
import { ProductInfo } from './ProductInfo';

export function Product() {
    return (
        <ContainerOuter>
            <Card className="bg-solid-secondary p-10 rounded hidden lg:block 
            ">
                <div className="flex gap-10 items-stretch">
                    <div className="gap-3 flex flex-col w-full">
                        <img src={ProductImage} alt="product" className="w-full h-full" />
                        <Comment />
                    </div>
                    <div className="gap-3 flex flex-col w-full">
                        <ProductInfo />
                    </div>
                </div>
            </Card>
        </ContainerOuter>
    );
}
