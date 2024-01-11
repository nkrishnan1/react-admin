import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import Header from '../../components/Header.jsx';
import StatBox from '../../components/StatBox.jsx';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import ProgressCircle from '../../components/ProgressCircle.jsx';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="Dashboard" subtitle="Welcome to your dashboard"></Header>
      

        <Box>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}>
            <DownloadOutlinedIcon sx={{marginRight: "10px"}}/>
              Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRIDS */}
      
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gap={"20px"}
        gridAutoRows={"140px"}
      >
        <Box 
          gridColumn={"span 3"} 
          backgroundColor={colors.primary[400]} 
          display={"flex"} 
          alignItems="center" 
          justifyContent={"center"}
        >
            <StatBox 
              title="20,361" 
              subtitle="Emails Sent" 
              icon={<EmailIcon sx={{fontSize: "26px", color: colors.greenAccent[600]}}/>}
              progress={0.75}
              increase="+14%"
            />
        </Box>
        
        <Box 
          gridColumn={"span 3"} 
          backgroundColor={colors.primary[400]} 
          display={"flex"} 
          alignItems="center" 
          justifyContent={"center"}
        >
            <StatBox 
              title="600,564" 
              subtitle="Sales Obtained" 
              icon={<PointOfSaleIcon sx={{fontSize: "26px", color: colors.greenAccent[600]}}/>}
              progress={0.75}
              increase="+21%"
            />
        </Box>

        <Box 
          gridColumn={"span 3"} 
          backgroundColor={colors.primary[400]} 
          display={"flex"} 
          alignItems="center" 
          justifyContent={"center"}
        >
            <StatBox 
              title="50,506" 
              subtitle="New Clients" 
              icon={<PersonAddIcon sx={{fontSize: "26px", color: colors.greenAccent[600]}}/>}
              progress={0.30}
              increase="+5%"
            />
        </Box>

        <Box 
          gridColumn={"span 3"} 
          backgroundColor={colors.primary[400]} 
          display={"flex"} 
          alignItems="center" 
          justifyContent={"center"}
        >
            <StatBox 
              title="2,506,912" 
              subtitle="Traffic Inbound" 
              icon={<TrafficIcon sx={{fontSize: "26px", color: colors.greenAccent[600]}}/>}
              progress={0.85}
              increase="+43%"
            />
        </Box>

      {/* ROW 2 */}
          <Box
            gridColumn={"span 8"}
            gridRow={"span 2"}
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt={"25px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={"0 30px"}
            >
              <Box>
                <Typography variant="h5" fontWeight="600" sx={{color: colors.grey[100]}}>Sales Overview</Typography>
                <Typography variant="h3" fontWeight="bold" sx={{color: colors.greenAccent[500]}}>$89,321,32</Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon sx={{color: colors.greenAccent[500], fontSize: "26px"}}/>
                </IconButton>
              </Box>
            </Box>
            <Box height={"250px"} mt={"-20px"}>
              <LineChart isDashboard={true}/>
            </Box>
          </Box>
            {/*TRANSACTIONS*/}
            <Box
              display={"grid"}
              gridColumn={"span 4"}
              gridRow={"span 2"}
              backgroundColor={colors.primary[400]}
              overflow="auto"
            >
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p={"15px"}>
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Transactions</Typography>
              </Box>
              {mockTransactions.map((transaction, index) => (
                <Box
                  key={`${transaction.txId}-${index}`}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p={"15px"}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>{transaction.txId}</Typography>
                    <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                  </Box>
                  <Box color={colors.grey[100]}>
                    {transaction.date}
                  </Box>
                  <Box 
                    backgroundColor={colors.greenAccent[500]}
                    p={"5px 10px"}
                    borderRadius={"4px"}>
                    {transaction.cost}
                  </Box>
                </Box>
              ))}
            </Box>
          {/* ROW 3 */}
          <Box
            gridColumn={"span 4"}
            gridRow={"span 2"}
            backgroundColor={colors.primary[400]}
            p={"30px"}
          >
              <Typography variant="h5" fontWeight="600">Campaign</Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                mt={"25px"}
              >
              <ProgressCircle size='125'/>
                <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt:"15px"}}>$78,908 revenue generated</Typography>
                <Typography>Includes miscalaneus expenditures and cost</Typography>
              </Box>
          </Box>

          {/* ROW 4 */}
          <Box
            gridColumn={"span 4"}
            gridRow={"span 2"}
            backgroundColor={colors.primary[400]}
          >
              <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>Sales Quantity</Typography>
              <Box
                height={"250px"}
                mt={"-25px"}
              >
                <BarChart isDashboard={true}/>
              </Box>
          </Box>
          
          {/* ROW 5 */}
          <Box
            gridColumn={"span 4"}
            gridRow={"span 2"}
            backgroundColor={colors.primary[400]}
            p={"30px"}
          >
              <Typography variant="h5" fontWeight="600" sx={{mb:"15px"}}>Geography Based Traffic</Typography>
              <Box
                height="200px"
              >
                <GeographyChart isDashboard={true}/>
              </Box>
          </Box>


      </Box>
    </Box>
  )
}

export default Dashboard