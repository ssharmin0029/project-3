import React from 'react'
import Asset from './Asset'

export default function Portfolio({ assets }) {
    return (
        assets.map(asset => {
            return <Asset key={asset.id} asset={asset} />
        })
        // <div>
            
        //     <table class="table table-dark">
        //         <thead>
        //             <tr>
        //             <th scope="col">#</th>
        //             <th scope="col">Coin</th>
        //             <th scope="col">Price</th>
        //             <th scope="col">Holdings</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //             <th scope="row">1</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             </tr>
        //             <tr>
        //             <th scope="row">2</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             </tr>
        //             <tr>
        //             <th scope="row">3</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )
}
