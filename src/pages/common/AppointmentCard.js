
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const AppointmentCard = (props) => {
    return (
        <div className="appointment-card">
            <Card variant="outlined" sx={{ m: 2, borderRadius:"15px", ':hover': {boxShadow: 10}}}>
                 <CardMedia
                    sx={{ height: 140 }}
                    image="header-green.png"
                />
                <CardContent>
                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography> */}
                    <Typography sx={{ m: 0, p:0, color: "#626581" }}variant="caption" color="text.secondary" >{props.data.modality}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }} component="div">
                       {props.data.title}
                    </Typography>
                    <Typography sx={{ color: "#626581", mb: 5}}>
                       {props.data.professional}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#808DAC" }}>{props.data.date}</Typography>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                        <Typography variant="body2"  sx={{ color: "#808DAC" }} >{props.data.time} hrs </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" sx={{ color: "#808DAC" }}>{props.data.duration}</Typography>
                        </Grid>
                    </Grid>
                  
                    
                </CardContent>
            </Card>
        </div>
    );
};
 
export default AppointmentCard;
