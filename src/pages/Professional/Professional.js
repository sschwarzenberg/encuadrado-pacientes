import React from "react";
import { Typography, Grid, Button, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { mockEventData } from "../../structure/mockData";
import AppointmentCard from "../common/AppointmentCard";

const Professional = (props) => {
  return (
    <div className="professional">
      <Grid container>
        <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
          <img src="avatar-square.png" alt="Logo" style={{ width: "100%" }} />
        </Grid>
        <Grid item sx={{ pl:4 }} xs={6} sm={6} md={4} lg={6} xl={6}>
          <Typography variant="h6" sx={{ fontWeight: 700 }} component="div">
            Jame Smith
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 300 }} component="div">
            jame.smith@gmail.com
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300, mt: 4 }} component="div">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.
          </Typography>
        </Grid>
        <Grid item  sx={{ pl:4 }}  xs={6} sm={6} md={3} lg={4} xl={4}>
            <Button variant="contained" startIcon={<AddIcon />} disableElevation sx={{ textTransform: "initial", backgroundColor: "#1915D1" }}>
                Agendar Hora
            </Button>
            <br/>
            <Rating
                name={`rating-1`} // Use a unique name for each professional
                value={3} // Set the initial rating
                readOnly // Make it read-only
                precision={0.5} // Allow half-star ratings
            />
             <Typography variant="body2" sx={{ fontWeight: 300 , mb: 2}} component="div">
                56 Evaluaciones
            </Typography>
            <img src="map.png" alt="Map" style={{ px:4, width: '100%', alignSelf: 'flex-start' }} />
        </Grid>
      </Grid>
       <Typography variant="h5" sx={{ fontWeight: 700 , mb: 2}} component="div">
                Appointments
        </Typography>
            <Grid container spacing={0}>
                {mockEventData.map(appointment => (
                <Grid item key={appointment.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                    <AppointmentCard data={appointment} />
                </Grid>
                ))}
            </Grid>
    </div>
  );
};

export default Professional;
