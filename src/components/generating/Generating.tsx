import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import spinner from "../../assets/generating.gif";
import './Generating.css';

function Generating() {
    const [percentage, setPercentage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const increment = () => {
            // Randomly increase percentage
            setPercentage(prev => {
                const randomIncrease = Math.min(100, prev + Math.floor(Math.random() * 10) + 1);
                if (randomIncrease >= 100) {
                    // If the percentage is 100, navigate to results after a short delay
                    setTimeout(() => navigate('/results'), 500);
                }
                return randomIncrease;
            });
        };

        // Start the percentage increase
        const interval = setInterval(increment, 300); // Adjust time here as needed

        // Stop the interval when percentage reaches 100%
        if (percentage >= 100) {
            clearInterval(interval);
        }

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [percentage, navigate]); // Dependencies to rerun the effect when percentage changes

    return (
        <div className="Content-wrapper-generating">
            <img src={spinner} className="App-spinner" alt="spinner" />
            <div className="Percentage">{percentage}%</div>
            <div className="Generating">now generating</div>
        </div>
    );
}

export default Generating;
