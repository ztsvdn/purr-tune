import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo_violet.svg";
import catLogo from "../../assets/logo_cat_face.png";
import './Main.css';

function Main() {
    const [text, setText] = useState('');
    const [genre, setGenre] = useState('Rock');
    const navigate = useNavigate();

    const handleGenerateClick = () => {
        // Mock sending data to the backend
        const mockSendToBackend = async () => {
            console.log('Sending data to the backend:', { text, genre });
            // Mock backend delay
            await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 second delay
            // After mock sending, navigate to the generating tab
            navigate('/generating');
        };

        mockSendToBackend();
    };

    // Function to handle text change in the textarea
    const handleTextChange = (e: any) => {
        setText(e.target.value);
    };

    // Function to handle genre change in the select
    const handleGenreChange = (e: any) => {
        setGenre(e.target.value);
    };

    return (
        <div className="Main">
            <div className="Content-wrapper-main">
                <div className="Logo-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={catLogo} className="App-cat-logo" alt="cat logo" />
                </div>
                <div className="Input-wrapper">
                    <textarea
                        className="Textarea"
                        placeholder="Paste your song text here..."
                        value={text}
                        onChange={handleTextChange}
                    />
                    <select
                        className="Select"
                        value={genre}
                        onChange={handleGenreChange}
                    >
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Rap">Rap</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Country">Country</option>
                    </select>
                </div>
            </div>
            <button className="Button" onClick={handleGenerateClick}>Generate</button>
        </div>
    );
}

export default Main;
