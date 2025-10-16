import React from 'react'

export default function About(props) {
  return (
    <div style={props.style}>
        <h2>About TextUtils</h2>
        <p>TextUtils is a versatile web application designed for text manipulation and analysis. It provides an easy-to-use interface that helps users quickly modify, analyze, and understand text content without needing any complex tools.</p>
        <h4>Purpose</h4>
        <p>TextUtils is built to simplify everyday text processing tasks, whether you’re a student, writer, programmer, or professional. It allows you to perform transformations, get insights, and even learn word meanings in one place.</p><br/>
        <h3>Key Features</h3><br/>
        <h5>1.Text Transformation</h5>
            <ul>
                <li>Convert text to uppercase or lowercase with one click.</li>
                <li>Remove extra spaces for clean formatting.</li>
                <li>Clear text instantly when needed.</li>
            </ul>
        <h5>2.Text Analysis</h5>
        <ul>
            <li>Counts words and characters in real-time.</li>
            <li>Estimates reading time based on the number of words.</li>
        </ul>
        <h5>3.Clipboard & Speech</h5>
            <ul>
                <li>Copy your text to clipboard for easy use elsewhere.</li>
                <li>Listen to your text using text-to-speech (speech synthesis).</li>
            </ul>
        <h5>4.Dictionary Integratio</h5>
            <ul>
                <li>Search for word meanings directly from the navbar.</li>
                <li>Uses a dictionary API to fetch definitions instantly.</li>
            </ul>
        <h5>5.Dark/Light Mode</h5>
        <ul>
            <li>Toggle between dark mode and light mode for comfortable reading.</li>
            <li>Backgrounds, text colors, and borders adapt automatically.</li>
        </ul>
        <h5>6.Smooth Tab Navigation</h5>
        <ul>
            <li>Switch between Home (TextForm) and About tabs without page reloads.</li>
            <li>The About tab shows this description and app details dynamically.</li>
        </ul>
    </div>
  )
}