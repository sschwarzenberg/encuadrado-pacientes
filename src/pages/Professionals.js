import React, { useState } from "react";
import ProfessionalsCard from '../pages/common/ProfessionalsCard';
import { Typography, Grid, TextField, Autocomplete, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { mockProfessionalData } from "../structure/mockData";
import { NavLink } from 'react-router-dom';

const Professionals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myProfessional, setMyProfessional] = useState(true);
  const mockProfessionals = [];
  const professionalsToMap = myProfessional ? mockProfessionalData : mockProfessionals;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

for (let i = 1; i <= 40; i++) {
    const professional = {
        id: i,
        name: `Professional ${i}`,
        profession: `Mock Profession ${i}`,
        bio: `This is a mock professional ${i}.`,
        location: `Mock Location ${i}`,
        contact: `professional${i}@example.com`,
        rating: Math.floor(Math.random() * 5.0) + 1.0,
        amountOfRatings: Math.floor(Math.random() * 100) + 1,
        specialties: [`Specialty ${i}a`, `Specialty ${i}b`,`Specialty ${i}c`, `Specialty ${i}d`],
        appointments: []
    };

    mockProfessionals.push(professional);
}

console.log(mockProfessionals);
    return (
      <div className="home">
          <Typography variant="h4"  sx={{ fontWeight: 700, mb:1}}> Professionals </Typography>
          <Grid container spacing={0}>
            <Typography variant="body2" sx={{ fontWeight: myProfessional ? 700 : 300 , mb: 3,  cursor: "pointer"}} onClick={() => setMyProfessional(true)}>My professionals </Typography>
            <Typography variant="body2" sx={{ fontWeight: myProfessional ? 300 : 700, mb: 3, ml: "4px",  cursor: "pointer" }}onClick={() => setMyProfessional(false)}> | All professionals </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 3, mb: 4 }}>
        <Grid item>
          <Grid container>
             <Grid item>
            <Autocomplete
              multiple
              limitTags={1}
              disablePortal
              options={["<1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
              getOptionLabel={(option) => option}
              sx={{ width: 250, mr: 2 }}
              renderInput={(params) => <TextField {...params} label="Ratings" />}
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
      <Grid container spacing={0}>
        {professionalsToMap.map(professional => (
          <Grid item key={professional.id} xs={12} sm={12} md={6} lg={4} xl={3}>
            <NavLink to="/professional" sx={{ textDecoration: 'none' }} className='professiona-card-long'>
              <ProfessionalsCard data={professional} />
            </NavLink>
          </Grid>
        ))}
      </Grid>
      </div>
    );
  }
   
  export default Professionals;