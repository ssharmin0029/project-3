import React from 'react'

export default function AddAsset() {
    return (
        <div>
            <form>
                <div class="dropdown col-sm-2 col-form-label">
                    <button class="btn btn-primary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Buy
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Sell</a>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Asset Symbol</label>
                    <div class="col-sm-10">
                    <input type="symbol" class="form-control" id="inputPassword3" placeholder="BTC"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Amount Purchased</label>
                    <div class="col-sm-10">
                    <input type="symbol" class="form-control" id="inputPassword3" placeholder=".5344"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Dollars Spent</label>
                    <div class="col-sm-10">
                    <input type="symbol" class="form-control" id="inputPassword3" placeholder="$10,000"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2 col-form-label">
                    <button type="submit" class="btn btn-primary">Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
