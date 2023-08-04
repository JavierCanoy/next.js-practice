type Post = {
  id: string;
  name: string;
  tittle: string;
  number: number;
};

let posts: Post[] = [];
//handlerCRUD.post
export const getPost = () => posts;

export const addPost = (post: Post) => {
  posts.push(post);
};

export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePost = (id: string, name: string, tittle: string) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.name = name;
    post.tittle = tittle;
  } else {
    throw new Error("no post found ! ");
  }
};

export const getId = (id: string) => {
  return posts.find((post) => post.id === id);
};
