exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/punk/)) {
    page.matchPath = '/punk/*';
    createPage(page);
  }

  if (page.path.match(/^\/collage/)) {
    page.matchPath = '/collage/*';
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    experiments: {
      syncWebAssembly: true,
    },
  });
};
