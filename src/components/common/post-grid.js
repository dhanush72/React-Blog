import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import TagRow from "./tag-row";

const PostGrid = ({ posts }) => {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginationPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize, posts]);

  useEffect(() => {
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  }, [current, pageSize]);

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
        {paginationPosts.map((post, index) => {
          return (
            <div className="post-container">
              <figure key={index}>
                <Link to={post.url}>
                  <img
                    src={require(`../../assets/images/${post.image}`).default}
                    alt={post.title}
                  />
                </Link>
              </figure>
              <div className="content">
                <TagRow tags={post.categories} />
                <h2 className="title"> {post.title} </h2>
                <p className="author-text">
                  <span>
                    By:
                    <Link
                      className="author-name"
                      to={`/authors/${post.author}`}
                    >
                      {post.author}
                    </Link>
                  </span>
                  <span> - {post.date} </span>
                </p>
                <p className="description-text">{post.description}</p>
                <Link to="/">read more...</Link>
              </div>
            </div>
          );
        })}
      </section>

      <Pagination
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
};

export default PostGrid;
