export interface AnimeShippingPrices {
    type: string;
    price: number;
}

export interface Anime {
    id: number;
    title: string;
    views: number;
    description: string;
}

export const animeList: Anime[] = [
    {
        id: 1,
        title: 'Black Clover',
        views: 799,
        description: 'A Very awesome anime to watch it has my favorite anime thing MAGIC :)'
    },
    {
        id: 2,
        title: 'Bleach',
        views: 699,
        description: 'The biggest anime in fights and epic ost'
    },
    {
        id: 3,
        title: 'One Piece',
        views: 299,
        description: 'Amazing anime with very detailed world and mysteries'
    }
];
