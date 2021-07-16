import React from 'react';
import Nav from './Nav';
import {Redirect} from 'react-router-dom'

function Transaction () {
    const data = window.sessionStorage.getItem('isLoggedIn')
    return(
        <div>
            {data &&
            <section className = 'transaction'>
                <Nav />

                <div className='transactionCont'>
                <h1 id='comingSoon'>Coming Soon...</h1>
                </div>
            </section>
            }
            {!data && <Redirect to = '/login' /> }
        </div>
    )
}

export default Transaction;