class Blog {
  constructor() {
    this.posts = [];
  }

  addBlogPost(post, author) {
    this.posts.push({ post: post, author: author });
  }

  getBlogPosts() {
    return this.posts.length
    === 0 ? "There are 0 blog posts"
    : this.posts.map(Blog => Blog.post);
  }

  getBlogAuthors() {
    return this.posts
    .filter(Blog => Blog.author)
    .map(Blog => Blog.author)
  }

  getSpecificBlogAuthor(post) {
    let blog = this.posts.find(Blog => Blog.post === post);
    if (!blog) {
      return "No such blog post";
    }
    return blog.author ? blog.author : "Blog has no author";
  }
}

module.exports = Blog;
