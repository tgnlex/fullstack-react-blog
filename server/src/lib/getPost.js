const getPost = (posts, slug) => {
  const post = posts.slug[slug];
  return post;
}

export {getPost};