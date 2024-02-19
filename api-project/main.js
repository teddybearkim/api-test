const API_KEY = `88c6a5ff95c4406aacf7297c91195e8a`


const getLatestNews = () => {
  const url = new URL(`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?country=us&apiKey=${API_KEY}`);
  const response = fetch(url)
}
getLatestNews();

