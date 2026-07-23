import React, { Component } from "react";

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/posts")

      .then((response) => response.json())

      .then((data) => {

        this.setState({
          posts: data.slice(0, 10)
        });

      })

      .catch(() => {

        this.setState({
          hasError: true
        });

      });
  }

  componentDidCatch(error, info) {

    console.log(error);
    console.log(info);

  }

  render() {

    if (this.state.hasError) {

      return <h2>Error Loading Data</h2>;

    }

    return (

      <div>

        <h1>Blog Posts</h1>

        <ul>

          {

            this.state.posts.map(post => (

              <li key={post.id}>

                <b>{post.title}</b>

              </li>

            ))

          }

        </ul>

      </div>

    );

  }

}

export default Posts;
