import React from 'react'
import '../App.css';

function Footer() {
  return (
    <div> 
        <footer class="Footer">
            <ul class="Footer_list">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/settings">Setting</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/help">Help</a>
                    </li>
                <li>•</li>
                <li>
                    <a href="/api">API Documentation</a>
                </li>
                <li>•</li>
                <li>
                    <a href="https://news.ycombinator.com/" target="_blank" rel="noopener">Hacker News</a>
                </li>
                <li>•</li>
                <li>
                    <a href="https://github.com/algolia/hn-search" target="_blank" rel="noopener">Fork/Contribute</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/cool apps">Cool Apps</a>
                </li>
                <li>•</li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer;