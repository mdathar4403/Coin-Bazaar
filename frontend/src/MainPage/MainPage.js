import React from 'react'
import './MainPage.css'


const MainPage = () => {
  return (
    <div>
      <main>
            <h1>DashBoard</h1>

            <div className="date">
                {/* <input type="date"> */}
            </div>

            <div className="insights">
                <div className="sales">
                    <span className="material-icons-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,024</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF SALES --> */}
                <div className="expenses">
                    <span className="material-icons-sharp">bar_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Expenses</h3>
                            <h1>$14,194</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF EXPENSES --> */}
                <div className="income">
                    <span className="material-icons-sharp">stacked_line_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Incomes</h3>
                            <h1>$17,811</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>47%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF INCOME --> */}
            </div>
            {/* <!----------- END OF INSIGHTS -------------> */}

            <div className="orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>81641</td>
                            <td>Due</td>
                            <td className="war">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>69001</td>
                            <td>Due</td>
                            <td className="war">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>12346</td>
                            <td>Due</td>
                            <td className="war">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>52921</td>
                            <td>Due</td>
                            <td className="war">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>33911</td>
                            <td>Due</td>
                            <td className="war">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </main>
    </div>
  )
}

export default MainPage
