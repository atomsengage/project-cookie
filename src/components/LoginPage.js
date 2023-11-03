import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
        setShowSignup(false);
    };

    const handleSignup = () => {
        setShowSignup(true);
        setShowForgotPassword(false);
    };

    const login = async () => {
        const loginData = {
            username,
            password
        };

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (data.success) {
                setStatusMessage("Logged in successfully!");
                // Redirect to a dashboard or home page
                // window.location.href = "/dashboard";
            } else {
                setStatusMessage(data.message || "Invalid credentials!");
            }
        } catch (error) {
            setStatusMessage("An error occurred. Please try again later.");
        }
    };

    return (
      <div className="login-background">
        <div className="login-container">
            <h2>Login</h2>
            <input 
                type="text" 
                id="username" 
                placeholder="Username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
            />
            <button onClick={login}>Login</button>
            <p>
                <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
            </p>
            <p>
                Don't have an account? <a href="#" onClick={handleSignup}>Signup</a>
            </p>
            <p id="status-message">{statusMessage}</p>

            {showForgotPassword && (
                <div className="forgot-password-container">
                    <h2>Forgot Password</h2>
                    {/* Add the form and logic for forgot password */}
                    <button onClick={() => setShowForgotPassword(false)}>Go back to Login</button>
                </div>
            )}

            {showSignup && (
                <div className="signup-container">
                    <h2>Signup</h2>
                    {/* Add the form and logic for signup */}
                    <button onClick={() => setShowSignup(false)}>Go back to Login</button>
                </div>
            )}
        </div>
    </div>
    );
}

export default LoginPage;
