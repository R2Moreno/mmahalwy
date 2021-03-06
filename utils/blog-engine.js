import { posts } from './post-list';
import { pages } from './page-list';

export default async (type = 'all') => {
  // these lists are already sorted from newest to oldest
  const [pagesList, postList] = await Promise.all([pages(), posts()]);

  // after combining the lists, they must be sorted again
  const allData = [...pagesList, ...postList];
  const sortedAllData = allData.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();

  switch (type) {
    case 'posts':
      return postList;
    case 'pages':
      return pagesList;
    case 'all':
    default:
      return sortedAllData;
  }
};
