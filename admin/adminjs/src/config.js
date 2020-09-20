let printUrl = window.publisherPageStore ? window.publisherPageStore.restUrl : '';

export const config = {
  devUrl: "http://news.dev.com/wp-json",
  prodUrl: printUrl,
};