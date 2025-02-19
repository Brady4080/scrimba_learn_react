/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ul>
                <li>I want to improve my web dev skills</li>
                <li>Seems like it would be fun</li>
                <li>Could open more job options</li>
            </ul>)