import React, { useState } from "react";
import AppointmentCard from "./common/AppointmentCard";
import { Typography, Grid, TextField, Autocomplete, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const mockAppointments = [];

  for (let i = 1; i <= 60; i++) {
    const appointment = {
      id: i,
      title: `Event name ${i}`,
      description: `Mock appointment ${i}`,
      date: `2023-01-0${i}`,
      time: '9:00 AM',
      location: '123 Main Street',
      professional: 'John Doe',
      price: 100,
      duration: '90 mins',
    };

    mockAppointments.push(appointment);
  }

  const appointmentStatuses = [
    { label: "Scheduled", value: "scheduled" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
    // Add more appointment statuses as needed
  ];

  const filteredAppointments = mockAppointments.filter((appointment) => {
    return (
      appointment.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDate ? appointment.date === filterDate : true)
    );
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  return (
    <div className="appointments">
      <Typography variant="h4">Appointments</Typography>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 3, mb: 4 }}>
        <Grid item>
          <Grid container>
          <Grid item>
            <Autocomplete
              multiple
              limitTags={1}
              disablePortal
              id="appointment-status-autocomplete"
              options={appointmentStatuses}
              getOptionLabel={(option) => option.label}
              sx={{ width: 250, mr: 2 }}
              renderInput={(params) => <TextField {...params} label="Appointment Status" />}
            />
            </Grid>
             <Grid item>
            <Autocomplete
              multiple
              limitTags={1}
              disablePortal
              options={["Jane Doe", "John Doe", "Bob Smith", "Alice Johnson", "Mike Thompson", "Sarah Davis"]}
              getOptionLabel={(option) => option}
              sx={{ width: 250, mr: 2 }}
              renderInput={(params) => <TextField {...params} label="Professionals" />}
            />
            </Grid>
             <Grid item>
            <Autocomplete
              multiple
              limitTags={1}
              disablePortal
              options={["Psicology", "Nutrition", "Dentist", "Dermatology", "Pediatrics", "Cardiology"]}
              getOptionLabel={(option) => option}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Categories" />}
            />
            </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredAppointments.map((appointment) => (
          <Grid item key={appointment.id} xs={12} sm={12} md={6} lg={4} xl={3}>
            <AppointmentCard data={appointment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Appointments;
