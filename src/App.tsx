import RootLayout from './layouts';
import { Steps } from '@components/Steps';
import { Product } from '@components/Product';
import { ProductMobile } from '@components/ProductMobile';

function App() {
    return (
        <RootLayout>
            <div className="flex flex-col items-center justify-center min-h-screen lg:gap-10 gap-4">
                <Steps />
                <Product />
                <ProductMobile />
            </div>
        </RootLayout>
    );
}

export default App;
