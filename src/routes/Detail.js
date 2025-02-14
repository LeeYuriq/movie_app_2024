import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Location object:', location); // 디버깅용
        // location.state가 없으면 홈으로 리다이렉트
        if (!location.state) {
            navigate('/');
        }
    }, [location, navigate]);

    // location.state가 없는 경우 
    if (!location.state) return <span>No data available</span>;
    
     // location.state에서 전달된 데이터를 읽음
    return ( 
         // year, title, summary, poster, genres 
        <div className="detail">
            <img src={location.state.poster} 
                alt={location.state.title} 
                title={location.state.title}/>
            <div className="detail__data">
                <h3 className="detail__title">{location.state.title}</h3>
                <h5 className="detail__year">{location.state.year}</h5>
                <ul className="detail__genres">
                    {location.state.genres}
                </ul>
                <p className="detail__summary">{location.state.summary.slice(0)}</p>
            </div>
        </div>
    );
}

export default Detail;
