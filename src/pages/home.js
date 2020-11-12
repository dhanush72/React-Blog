import React from "react";
import PostMasonry from "../components/common/post-masonry";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";
import MasonryPost from "../components/common/masonry-post";
import PostGrid from "../components/common/post-grid";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  1: {
    height: 300,
  },
  3: {
    height: 630,
    marginLeft: 30,
    width: 630,
  },
};

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Dhanush";
    post.description =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere laborum incidunt hic voluptatem tenetur accusantium?";
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>

      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <PostMasonry posts={trending} columns={3} tagsOnTop={true} />
        </div>
      </section>
    </main>
  );
};

export default Home;
