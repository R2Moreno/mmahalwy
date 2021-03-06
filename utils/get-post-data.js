import BlogEngine from './blog-engine';

export default async function(pathname) {
  if (!pathname) return;

  // get the content component's file name from the router path
  const splitRoute = pathname.split('/');
  let compName = splitRoute.length > 0 ? splitRoute[splitRoute.length - 1] : null;

  // for the root path, we want index.js file
  compName = pathname == '/' ? 'index' : compName;

  // get page data based on file name
  let allPageData;
  try {
    allPageData = await BlogEngine();
  } catch (error) {
    console.log(`Error getting post and page lists: ${error}`);
  }

  const postData = allPageData.filter((component) => component.name == compName);

  return Promise.resolve(postData[0]);
}
