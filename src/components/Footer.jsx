import React from 'react'

export default function Footer() {
    return (
        <div >
            <footer className="bg-warning d-flex flex-wrap justify-content-between align-items-center  pt-3 mt-5 border-top "
                style={{ height: '8vh' }}
            >
                <div className="col-md-4 d-flex align-items-center justify-content-center w-100 fs-5">
                    <span className="text-dark">© 2023 <i>FoodCart</i>, Inc</span>
                </div>
            </footer>
        </div>

    )
}
