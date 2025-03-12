const ChaptersLocations = () => {

  return (
    <div className="articles">
      {error && <div>{error}</div>}
      {articles ? <NewsletterList articles={articles} title="Newsletters"/> : <div>Loading...</div>}
      <ImageSlideshow/>
    </div>
  );
}

export default ChaptersLocations;
