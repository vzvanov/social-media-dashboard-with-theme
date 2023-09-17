export type Overview = {
    id: number;
    title: string;
    index: string;
    indexNumber: string;
    progress: string;
    progressNumber: string;
}

export const overview: Overview[] = [
    {
        id: 1,
        title: 'facebook',
        progress: 'up',
        progressNumber: '3',
        indexNumber: '87',
        index: 'Page Views',
    },
    {
        id: 2,
        title: 'facebook',
        progress: 'down',
        progressNumber: '2',
        indexNumber: '52',
        index: 'Likes',
    },
    {
        id: 3,
        title: 'instagram',
        progress: 'up',
        progressNumber: '2257',
        indexNumber: '5462',
        index: 'Likes',
    },
    {
        id: 4,
        title: 'instagram',
        progress: 'up',
        progressNumber: '1375',
        indexNumber: '52k',
        index: 'Profile Views',
    },
    {
        id: 5,
        title: 'twitter',
        progress: 'up',
        progressNumber: '303',
        indexNumber: '117',
        index: 'Retweets',
    },
    {
        id: 6,
        title: 'twitter',
        progress: 'up',
        progressNumber: '553',
        indexNumber: '507',
        index: 'Likes',
    },
    {
        id: 7,
        title: 'youtube',
        progress: 'down',
        progressNumber: '19',
        indexNumber: '107',
        index: 'Likes',
    },
    {
        id: 8,
        title: 'youtube',
        progress: 'down',
        progressNumber: '12',
        indexNumber: '1407',
        index: 'Total Views',
    },
]
