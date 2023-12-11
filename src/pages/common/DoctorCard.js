import React from "react";
import { Card, CardContent, CardMedia, Typography, Avatar, Grid } from "@mui/material";
import Chip from '@mui/material-next/Chip';

const DoctorCard = (props) => {
  return (
    <div className="appointment-card">
      <Card variant="outlined" sx={{ m: 2, display: 'flex', borderRadius:'15px', ':hover': {boxShadow: 10}}}>
      <Grid container >
      <Grid item xs={12} sm={3} md={3} xl={3}> 
      <CardMedia
           component="img"
           alt="Doctor Avatar"
           image="/avatar-square.png"
           sx={{ height:"100%", borderRadius: 1 }}
        />
        </Grid>
        <CardContent sx={{ px: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }} component="div">
                {props.data.name}
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                {props.data.profession}
              </Typography>
              {/* Add the Chips for the specialties each professional has */}
              <Typography sx={{ display: 'flex', fontSize: '13px' }} color="text.secondary">
                You have booked{' '}
                <span style={{ fontWeight: 700, marginLeft: '4px', marginRight: '4px' }}>{props.data.appointments.length} appointments</span> in total
              </Typography>
              {props.data.specialties.map((specialty, index) => (
                <Chip
                  key={index}
                  variant="filled"
                  style={{ backgroundColor: '#F0EFFF' }}
                  label={specialty}
                  sx={{ mr: '10px', fontWeight: 300, fontSize: '13px', color: '#3B109C', fontWeight: 300 }}
                />
              ))}
          {/* </Grid> */}
        </CardContent>
        </Grid>
      </Card>
    </div>
  );
};

export default DoctorCard;
