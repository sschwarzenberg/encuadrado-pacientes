import { Typography, Button, Grid } from '@mui/material';
import React from 'react';
import DebtCard from './DebtCard';

const DebtSnackBar = () => {
    const appointments = [
        { id: 1, name: 'John Doe', amount: 50000 },
        { id: 2, name: 'Jane Smith', amount: 75000 },
        { id: 3, name: 'Mike Johnson', amount: 100000 }
    ];

    return (
        <div className="debt-snackbar" style={{ backgroundColor: '#FFF4EA', padding: "2rem", borderRadius: "15px", margin: '1rem' }}>
            <Typography sx={{ mb: 1, p: 0, fontWeight: 500 }} variant="h5">⚠️ Settle your debt!</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                <span>You have <span style={{ fontWeight: 600, marginRight: '4px' }}>{appointments.length} unpaid appointments</span>
                    for a total of <span style={{ fontWeight: 600 }}>${appointments.reduce((total, appointment) => total + appointment.amount, 0)}
                    </span></span>
            </Typography>

            {/* Container for the cards */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                {/* Loop through appointments and display them */}
                {appointments.map(appointment => (
                    <DebtCard key={appointment.id} data={appointment} />
                ))}
            </div>

            {/* Centered button */}
            <Grid container justifyContent="center">
                <Button variant="outlined" disableElevation sx={{ textTransform: "initial", color: "#1915D1", borderColor: "#1915D1" }}>
                    Settle all debt
                </Button>
            </Grid>
        </div>
    );
};

export default DebtSnackBar;
