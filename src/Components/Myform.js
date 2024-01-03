import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../Custom.css";
import { Button, Grid } from "@mui/material";
import { useState } from "react";

const MyForm = () => {
  const top100Films = [
    { label: "Finance" },
    { label: "HR"},
    { label: "Operations" },
    { label: "Supply Chain" },
   
  ];

  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleSystemChange = (event, value) => {
    setSelectedSystem(value);
  };

  return (
    <>
      <div>
        <Paper sx={{ width:700,margin:"auto", padding: "12px" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ padding: "5px" }}>
            SYSTEM SUBSCRIPTION
          </Typography>
          <Divider />
          <Box height={20} />
          <Stack spacing={2}>
            
              <Grid container direction="row">
              <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Department Name
          </Typography>
                <Autocomplete
                  onChange={handleSystemChange}
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 400 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
           
            {selectedSystem && (
              <Stack spacing={2}>
                  <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            System Name
          </Typography>
                    {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                    <Autocomplete
                      onChange={handleSystemChange}
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 400 }}
                      renderInput={(params) => <TextField {...params} label="System Name" />}
                    />
                  </Grid>
                

                
                  <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            Sytem Description
          </Typography>
                    {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 400 }}
                      renderInput={(params) => <TextField {...params} label="System Description" />}
                    />
                  </Grid>
                
               
                  <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "5px", width:200  }}>
            EventCount
          </Typography>
                    {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 400 }}
                      renderInput={(params) => <TextField {...params} label="Event Count" />}
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
                      renderInput={(params) => <TextField {...params} label="Protocol" />}
                    />
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
    </>
  );
};
export default MyForm;
