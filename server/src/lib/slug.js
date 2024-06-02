const createSlug = (text, id) => {
  let slug = text 
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "");
  slug = slug.replace(/\s+/g, "-");
  return slug + "-" + id;
}

export {createSlug};