import moment from 'moment';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // redirect index to first page
  // router.addRoutes([{ path: '/', redirect: siteData.pages[0].path }]);
};
