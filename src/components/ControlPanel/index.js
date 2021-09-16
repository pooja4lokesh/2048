import React from 'react';
import './controlPanel.css';
export default function ControlPanel() {
    return (

        <div style={{
            background: "#AD9D8F",
            width: "467px",
            height: "200px",
            margin: "auto",
            padding: 5,
            borderRadius: 5,
            marginTop: 0,
        }}>
            <div style={{ }}>
                <p class="game">
                    <strong class="important">2048 </strong>
                </p>
                <p class="game-explanation">
                    <strong class="important">How to play:  </strong>
                    <strong>Press arrow keys to move the tiles.</strong>
                </p>
                <button type="button" class="btn btn-success btn-lg">New Game</button>
            </div>
        </div>);
}