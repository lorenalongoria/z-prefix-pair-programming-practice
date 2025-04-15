class Blog {
  constructor() {
    this.posts = [];
    this.comments = [];
  }

  addBlogPost(title, author, genre) {
    this.posts.push({ title: title, author: author, genre: genre });
  }

  addComment(title, user, comment) {
    this.comments.push({ title: title, user: user, comment: comment });
  }
  
  deleteBlog(title) {
    this.posts = this.posts.filter(post => post.title !== title);
    this.comments = this.comments.filter(comment => comment.title !== title);
  }

  getBlogPosts() {
    return this.posts.length === 0
      ? "There are 0 blog posts"
      : this.posts.map((Blog) => Blog.title);
  }

  getBlogComments(title) {
    const BlogComments = this.comments.filter(
      (commentObj) => commentObj.title === title
    );
    const formattedComments = BlogComments.map((commentObj) => {
      return { user: commentObj.user, comment: commentObj.comment };
    });
    return formattedComments.length === 0
      ? []
      : [{ comments: formattedComments }];
  }

  getCommentsBy(user) {
    const BlogComments = this.comments.filter(
      (commentObj) => commentObj.user === user
    );
    const formattedComments = BlogComments.map((commentObj) => {
      return { article: commentObj.title, comment: commentObj.comment };
    });
    return { user: user, comments: formattedComments };
  }

  getBlogAuthors() {
    return this.posts.filter((Blog) => Blog.author).map((Blog) => Blog.author);
  }

  getSpecificBlogAuthor(title) {
    let blog = this.posts.find((Blog) => Blog.title === title);
    if (!blog) {
      return "No such blog post";
    }
    return blog.author ? blog.author : "Blog has no author";
  }

  getBlogsFromGenre(genre) {
    return this.posts.filter((Blog) => Blog.genre === genre);
  }

  getAllGenres() {
    let genres = this.posts.map((Blog) => Blog.genre);
    return genres.length === 0
      ? "There are no genres available"
      : this.posts.map((Blog) => Blog.genre);
  }
}

module.exports = Blog;
