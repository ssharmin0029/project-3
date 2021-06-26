import React from 'react'

export default function Asset({asset}) {
    return (
        <div>
            {asset.name}
            {asset.price}
            {asset.holdings}
        </div>
    )
}
