import { 
    ResponsiveContainer,
    Area,
    XAxis, 
    YAxis, 
    Tooltip, 
    AreaChart, 
    CartesianGrid,
} from 'recharts';

import { areaChartData } from './chart-data';
import UserChart from './pie-chart';
import Logout from './logout';

const DashBoardMain = () => {
    return (
        <main id="main-section">
            

            <section class="dash-card">
               
                

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>
                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>
                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

            </section>

            <section class="project-status">
                <div class="project-content">
                    <div class="project-head">
                        <h4>Bar</h4>
                        <a href="" class="project-head-btn">See All</a>
                    </div>

                    <ResponsiveContainer width='100%' aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={areaChartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="red" fill="#144D43" />
                </AreaChart>
            </ResponsiveContainer>

                </div>

                <div class="project-content">
                    <div class="project-head">
                        <h4>Pie</h4>
                        <a href="_" class="project-head-btn">See All</a>
                        <UserChart />
                    </div>

                </div>

            </section>
        </main>
    );
}
 
export default DashBoardMain;