export interface IHeaderItem {
    name: string;
    icon: string;
}

export interface IStep {
    name: string;
    status: 'done' | 'current' | 'next';
}
