import React from "react";
import { CardContent, Grid, Hidden, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const Connectionform = () => {
    const top100Films = [
      { label: 'Finance', year: 1994 },
  { label: 'HR', year: 1972 },
  { label: 'Operations', year: 1974 },
      // { label: "Finance" },
      // { label: "HR"},
      // { label: "Operations" },
      // { label: "Supply Chain" },
        
      ];

 const [selectedSystem, setSelectedSystem] = useState(null);

  const handleSystemChange = (event, value) => {
    setSelectedSystem(value);
  };
    
  {
    return (
    
      <div>
      <Paper sx={{ width:700,margin:"auto", padding: "12px" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ padding: "5px" }}>
          SYSTEM CONNECTION
        </Typography>
        <Divider />
        <Box height={20} />
        <Stack spacing={2}>
            
            <Grid container direction="row">
              <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
              Department Name
          </Typography>
              {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Name :</Box> */}
              <Autocomplete
              onChange={handleSystemChange}
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Department Name" />}
              />
            </Grid>
          {selectedSystem && ( 
            
              <Stack spacing={2}>
                <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Source System
          </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    onChange={handleSystemChange}
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
             
                <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Sub
          </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Target System
          </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params}  />}
                  />
                </Grid>
                <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Protocol
          </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params}  />}/>
                </Grid> 
                <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Target Protocol
          </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} />}/>
                </Grid> 
            </Stack>
        )}
        </Stack>
        <Stack spacing={4}>
          <Grid container spacing={4}>
            <Grid item>
              <Button variant="contained" color="primary" size="large">
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" size="large">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </div> 
    );
  }
};
export default Connectionform;
