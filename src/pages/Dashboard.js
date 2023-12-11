import { Typography, Grid } from "@mui/material";
import React from "react";
import AppointmentCard from "./common/AppointmentCard";
import DoctorCard from "./common/DoctorCard";
import { mockEventData, mockProfessionalData } from "../structure/mockData";
import DebtSnackBar from "./common/DebtSnackbar";
import { NavLink } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="home">
            <Typography variant="h4" sx={{ ms: 2, fontWeight:500 }}>
                Hello Sofia!
            </Typography>
            <Typography sx={{ mb: 4, ms: 2  }} color="text.secondary">
                Welcome back to Encuadrado!
            </Typography>
            <Typography variant="h6" sx={{ ms: 2, fontWeight: 700 }}> Upcoming Appointments</Typography>
            
            {/* Use Grid container to display cards in a row */}
            <Grid container >
                <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
                    <Grid container spacing={0}>
                        {mockEventData.map(appointment => (
                        <Grid item key={appointment.id} xs={12} sm={12} md={6} lg={6} xl={4}>
                            <AppointmentCard data={appointment} />
                        </Grid>
                        ))}
                        
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <DebtSnackBar />
                </Grid>

            </Grid>
            

            <Typography variant="h6" sx={{ mt: 10, fontWeight: 700  }}>My professionals</Typography>
            <Grid container spacing={2}>
                {mockProfessionalData.map(appointment => (
                <Grid item key={appointment.id} xs={12} sm={12} md={6} lg={6}>
                    <NavLink to="/professional" sx={{ textDecoration: 'none' }} className='professiona-card-long'>
                        <DoctorCard data={appointment} />
                    </NavLink>
                </Grid>
                ))}
            </Grid>
            
        </div>
    );
};
 
export default Dashboard;