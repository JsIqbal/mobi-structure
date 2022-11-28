import { useSelector } from 'react-redux';
import { 
    ResponsiveContainer, 
    BarChart, 
    PieChart, 
    Area, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    AreaChart, 
    CartesianGrid, 
    Pie, 
    LineChart, 
    Line, 
    Legend 
} from 'recharts';

import { areaChartData, paiData_1, paiData_2, data } from '../view/chart-data';

function UserChart() {
    // const userList = useSelector((state) => state.UserSlice.value);

    return (
        <>
          <div className='row' style={{width:"100%"}}>
            <ResponsiveContainer width='99%' aspect={1}>
                <PieChart className='ms-auto me-auto' width={350} height={350}>
                    <Pie 
                        data={paiData_1} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={60} 
                        fill="#8884d8" 
                    />
                    <Pie 
                        data={paiData_2} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={70} 
                        outerRadius={90} 
                        fill="#144D43" 
                        label 
                    />
                </PieChart>
            </ResponsiveContainer>
          </div>
        </>
    );
}

export default UserChart;