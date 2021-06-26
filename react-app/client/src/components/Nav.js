import React from 'react'

export default function Nav() {
    return (
        <div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">MyCoin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">My Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Coin Rankings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Transactions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <button class="nav-link" href="#">Log In</button>
                </li>
            </ul>
        </div>
    )
}
