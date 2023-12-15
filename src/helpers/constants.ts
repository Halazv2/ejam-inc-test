import { IComment, IHeaderItem, IStep } from '@/types/interfaces';
import GuaranteeIcon from '@assets/icons/guarantee.svg';
import DeliveryIcon from '@assets/icons/delivery.svg';
import HeartIcon from '@assets/icons/heart.svg';
import ReturnIcon from '@assets/icons/return.svg';
import Visa from '@assets/cards/visa.svg';
import ShopPay from '@assets/cards/shop-pay.svg';
import PayPal from '@assets/cards/paypal.svg';
import MasterCard from '@assets/cards/mastercard.svg';
import GPay from '@assets/cards/gpay.svg';
import ApplePay from '@assets/cards/apple-pay.svg';
import Amex from '@assets/cards/amex.svg';
import Avatar from '@assets/images/avatar.png';

export const itemes: IHeaderItem[] = [
    { name: '30-DAY SATISFACTION GUARANTEE', icon: GuaranteeIcon },
    { name: 'Free delivery on orders over $40.00', icon: DeliveryIcon },
    { name: '50.000+ HAPPY CUSTOMERS', icon: HeartIcon },
    { name: '100% Money Back Guarantee', icon: ReturnIcon },
];

export const steps: IStep[] = [
    { name: 'Cart Review', status: 'done' },
    { name: 'Checkout', status: 'done' },
    { name: 'Special Offer', status: 'current' },
    { name: 'Confirmation', status: 'next' },
];

export const cards: string[] = [Visa, ShopPay, PayPal, MasterCard, GPay, ApplePay, Amex];

export const comments: IComment[] = [
    {
        id: 1,
        name: 'Ken T.',
        verified: true,
        rating: 5,
        comment:
            'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
        avatar: Avatar,
    },
    {
        id: 2,
        name: 'Ken T.',
        verified: true,
        rating: 5,
        comment:
            'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
        avatar: Avatar,
    },
    {
        id: 3,
        name: 'Ken T.',
        verified: true,
        rating: 5,
        comment:
            'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
        avatar: Avatar,
    },
    {
        id: 4,
        name: 'Ken T.',
        verified: true,
        rating: 5,
        comment:
            'As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.',
        avatar: Avatar,
    },
];
