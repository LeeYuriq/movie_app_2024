import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// React.Component 클래스의 기능을 추가한 Home 클래스
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    showScrollButton: false, // 스크롤 버튼 표시 여부
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
    window.addEventListener("scroll", this.handleScroll); // 스크롤 이벤트 추가
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // 스크롤 이벤트 제거
  }

  handleScroll = () => {
    const showScrollButton = window.scrollY > 100; // 스크롤 위치가 100px 이상일 때 버튼 표시
    this.setState({ showScrollButton });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  render() {
    const { isLoading, movies, showScrollButton } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <div className="loader__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}

        {/* 최상단 이동 버튼 */}
        {showScrollButton && (
          <button className="scrollToTop" onClick={this.scrollToTop}>
            ▲
          </button>
        )}
      </section>
    );
  }
}

export default Home;
