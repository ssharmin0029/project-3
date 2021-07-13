import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut, Line } from 'react-chartjs-2';
import './charts.css';


const Chart = () => {

    const [coinGecko, setCoinGecko] = useState([])
    const [userCoins, setUserCoins] = useState([])
    const [fullUserData, setFullUserData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                console.log(res.data)
                axios
                    .get('/api/coins/')
                    .then(res => {
                        console.log(res.data)
                        setUserCoins(res.data)
                        //deconstruct res.data
                    })
                    .catch(error => console.log(error))
                setCoinGecko(res.data)
                //deconstruct res.data
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (userCoins.length > 0) {
            const data = userCoins.map(coin => {
                console.log(coin)
                const match = coinGecko.filter(cg => cg.symbol === coin.symbol.toLowerCase())[0]
                console.log(match)
                const obj = {
                    ...coin,
                    image: match.image,
                    price: match.current_price
                }
                return obj
            })
            setFullUserData(data)
        }
    }, [userCoins])

    console.log(fullUserData)

    const assetValues = fullUserData.map(data => {
        return(
                parseFloat(data.price*data.holdings).toFixed(2))
    })

    const assetNames = fullUserData.map(data => {
        return(
                data.symbol, 
                data.asset
        )
    })

    console.log(assetValues)

    // first check how many assets there are, then based on the number of assets create a shade that is #00acd7 and add 50 shade each time until it generates enough colors

    return (
        <div>
            <Doughnut
                data={{
                    labels: assetNames,
                    datasets: [{
                        label: 'My Portfolio',
                        data: assetValues,
                        backgroundColor: [
                            'rgb(0, 153, 0, 0.2)',
                            'rgb(0, 128, 10, 0.2)',
                            'rgb(72, 192, 19, 0.2)',
                            'rgb(80, 153, 80, 0.2)',
                            'rgb(20, 153, 100, 0.2)'
                        ],
                        hoverBorderWidth: 5,
                        hoverOffset: 6
                    }]
                }}
                options={{
                    layout: {
                        padding: 100
                    },
                    plugins: {
                        title: {
                            display: true,
                            font: {
                                size: 22
                            },
                            text: 'Portfolio Breakdown'
                        }
                    }
                }}
            />

            {/* <Line 
                data = {{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }]
                }}
                options={{
                    layout: {
                        padding: 100
                    },
                    plugins: {
                        title: {
                            display: true,
                            font: {
                                size: 22
                            },
                            text: 'Coin Net Worth'
                        }
                    }
                }}
            /> */}

        </div>
    )
};

export default Chart;