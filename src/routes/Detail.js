import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    return <span>{location.state.title}</span>;
}

export default Detail;
