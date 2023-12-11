import React from 'react';
import { Card, Typography, Button, Grid } from '@mui/material';

const DebtCard = (props) => {
    return (
        <div className="debt-card">
            <Card variant="outlined" sx={{ m: 1, display: 'flex', borderRadius: '15px', borderColor:"#F3E5D8" }}>
                <Grid container sx={{ p: 1, px: 3, justifyContent: 'space-between' }}>
                    <Grid item sx={{ marginRight: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500 }} component="div">
                            {props.data.name}
                        </Typography>
                        <Typography color="text.secondary">
                            ${props.data.amount}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" disableElevation sx={{ textTransform: "initial", color: "#DE8000", borderColor: "#DE8000", borderRadius: "100px", borderWidth: "1.5px" }}>
                            pay
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default DebtCard;
