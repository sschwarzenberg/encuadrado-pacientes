import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Rating, Grid } from "@mui/material";

const ProfessionalsCard = (props) => {
  return (
    <div className="appointment-card">
      <Card variant="outlined" sx={{ m: 1.5, borderRadius: "15px",  ':hover': {boxShadow: 10},}}>
        <CardMedia sx={{ height: 250 }} image="profile.png" />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            {props.data.modality}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }} component="div">
            {props.data.name}
          </Typography>
          <Typography sx={{ color: "#626581", mb: 1 }}>{props.data.profession}</Typography>

          {/* 5-Star Rating */}
          <Grid container spacing={2}>
            <Grid item>
                <Typography sx={{ color: "#626581", mt: 1.5, fontWeight:700}}>{props.data.rating}.0</Typography>
            </Grid>
            <Grid item>
                <Rating
                    name={`rating-${props.data.id}`} // Use a unique name for each professional
                    value={props.data.rating} // Set the initial rating
                    readOnly // Make it read-only
                    precision={0.5} // Allow half-star ratings
                />
            </Grid>
            <Typography variant="body2" sx={{ color: "#626581", ml:2, fontWeight:300}}>{props.data.amountOfRatings} total evaluations</Typography>
           </Grid>
            {props.data.specialties.map((specialty, index) => (
                <Chip
                key={index}
                variant="filled"
                style={{ backgroundColor: '#F0EFFF' }}
                label={specialty}
                sx={{ mr: '10px', fontWeight: 300, fontSize: '13px', color: '#3B109C', fontWeight: 300 }}
                />
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalsCard;
