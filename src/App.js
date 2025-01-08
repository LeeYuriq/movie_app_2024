import React from 'react';
import axios from 'axios';

// React.Component 클래스의 기능을 추가한 App 클래스
class App extends React.Component {
  state = {
    isLoading : true,
    movie : [],
  };

  getMovies = async () => {
    const {
      data : {
        data : { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading : false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div> {isLoading ? 'Loading...' : 'We are ready'} </div>;
  }
}

export default App;
