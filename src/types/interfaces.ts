export interface IHeaderItem {
    name: string;
    icon: string;
}

export interface IStep {
    name: string;
    status: 'done' | 'current' | 'next';
}

export interface IComment {
    id: number;
    name: string;
    verified: boolean;
    rating: number;
    comment: string;
    avatar: string;
}
