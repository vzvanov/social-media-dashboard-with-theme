export type Summary = {
  id: number;
  title: string;
  titleText: string;
  index: string;
  indexNumber: string;
  progress: string;
  progressNumber: string;
}

export const summary: Summary[] = [
  {
    id: 1,
    title: 'facebook',
    titleText: '@nathanf',
    progress: 'up',
    progressNumber: '12',
    indexNumber: '1987',
    index: 'Followers',
  },
  {
    id: 2,
    title: 'twitter',
    titleText: '@nathanf',
    progress: 'up',
    progressNumber: '99',
    indexNumber: '1044',
    index: 'Followers',
  },
  {
    id: 3,
    title: 'instagram',
    titleText: '@realnathanf',
    progress: 'up',
    progressNumber: '1099',
    indexNumber: '11k',
    index: 'Followers',
  },
  {
    id: 4,
    title: 'youtube',
    titleText: 'Nathan F.',
    progress: 'down',
    progressNumber: '144',
    indexNumber: '8239',
    index: 'Subscribers',
  },
]
