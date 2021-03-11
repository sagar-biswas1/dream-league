import React from "react";

const Blog = () => {
  return (
    <div>
      {[...Array(4)].map((article, index) => (
        <Article key={index} days={index} />
      ))}
    </div>
  );
};

const Article = ({ days }) => {
  return (
    <div className="card text-center w-75 m-auto mt-5">
      <div className="card-header">Featured</div>
      <div className="card m-auto" style={{ maxWidth: "6000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.theconversation.com/files/227390/original/file-20180712-27030-1p50p7l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              className="w-75 p-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <p className="card-text">
          <small className="text-muted">
            Last updated {days + 1 * 2} days ago
          </small>
        </p>
      </div>
    </div>
  );
};

export default Blog;
