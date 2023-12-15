import { Card } from './Card';
import { ProductInfoMobile } from './ProductInfoMobile';

export function ProductMobile() {
    return (
        <div>
            <Card className="bg-solid-secondary p-5 rounded block lg:hidden">
                <div className="flex gap-10 items-stretch">
                    <div className="gap-3 flex flex-col w-full">
                        <ProductInfoMobile />
                    </div>
                </div>
            </Card>
        </div>
    );
}
