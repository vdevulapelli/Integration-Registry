import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [departments, setDepartments] = useState([]);
  const [systemNames, setSystemNames] = useState([]);
  const [systemDescription, setSystemDescription] = useState([]);
  const [eventCounts, setEventCounts] = useState([]);
  const [protocols, setProtocols] = useState([]);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState(null);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [selectedSystemDescription, setSelectedSystemDescription] = useState(null);
  const [selectedEventCount, setSelectedEventCount] = useState(null);
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  useEffect(() => {
    // fetchDepartments();
    // fetchSystemNames();
    fetchUsers();
    // fetchsystemDescription();
    // fetcheventCounts();
    // fetchprotocols();
  }, []);

  // const fetchDepartments = async () => {
  //   const response = await axios.get("http://localhost:3001/getdepartments");
  //   setDepartments(response.data.map((dep) => ({ label: dep.departmentName })));
  // };

  // const fetchSystemNames = async () => {
  //   const response = await axios.get("http://localhost:3001/getsystemnames");
  //   setSystemNames(response.data.map((sys) => ({ label: sys.systemName })));
  // };

  // const fetchsystemDescription = async () => {
  //   const response = await axios.get("http://localhost:3001/getsystemdescriptions");
  //   setSystemDescription(response.data.map((des) => ({ label: des.systemDescription })));
  // };

  // const fetcheventCounts = async () => {
  //   const response = await axios.get("http://localhost:3001/geteventcounts");
  //   setEventCounts(response.data.map((eve) => ({ label: eve.eventCount })));
  // };
  // const fetchprotocols = async () => {
  //   const response = await axios.get("http://localhost:3001/getprotocols");
  //   setProtocols(response.data.map((pro) => ({ label: pro.protocol })));
  // };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getusers");
      // const uniqueSystemNames = new Set(response.data.map(user => user.systemName));
      // const systemNamesData = Array.from(uniqueSystemNames).map(name => ({ label: name }));
      // setSystemNames(systemNamesData);

      const data = response.data;
      //Sys
      const extractedSystemNames = data.map((item) => item.systemName);
      const uniqueSystemNames = Array.from(new Set(extractedSystemNames));
      setSystemNames(uniqueSystemNames.map((name) => ({ label: name })));
      //Dep
      const extractedDepartmentNames = data.map((item) => item.departmentName);
      const uniqueDepartmentNames = Array.from(new Set(extractedDepartmentNames));
      setDepartments(uniqueDepartmentNames.map((name) => ({ label: name })));
      //SysDes
      const extractedSystemDescriptionNames = data.map((item) => item.systemDescription);
      const uniqueSystemDescription = Array.from(new Set(extractedSystemDescriptionNames));
      setSystemDescription(uniqueSystemDescription.map((name) => ({ label: name })));
      //Eve
      const extractedEventCount = data.map((item) => item.eventCount);
      const uniqueEventCounts = Array.from(new Set(extractedEventCount));
      setEventCounts(uniqueEventCounts.map((count) => ({ label: count })));
      //Pro
      const extractedProtocol = data.map((item) => item.protocol);
      const uniqueProtocols = Array.from(new Set(extractedProtocol));
      setProtocols(uniqueProtocols.map((name) => ({ label: name })));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const register = async (selectedDepartmentName, selectedSystem, selectedSystemDescription, selectedEventCount, selectedProtocol) => {
    axios
      .post("http://localhost:3001/register", {
        departmentName: selectedDepartmentName.label,
        systemName: selectedSystem.label,
        systemDescription: selectedSystemDescription.label,
        eventCount: selectedEventCount.label,
        protocol: selectedProtocol.label,
      })
      .then((response) => {
        console.log(response);
        if (response.statusText == "OK") {
          alert("Record instered");
        }
      });
  };
  const handleDepartmentNameChange = (event, value) => {
    setSelectedDepartmentName(value);
  };
  const handleSystemChange = (event, value) => {
    setSelectedSystem(value);
  };
  const handleSystemDescriptionChange = (event, value) => {
    setSelectedSystemDescription(value);
  };
  const handleEventCountnChange = (event, value) => {
    setSelectedEventCount(value);
  };
  const handleProtocolChange = (event, value) => {
    setSelectedProtocol(value);
  };

return (
    <>
      <div>
        <Paper sx={{ width: 1000, margin: "auto", padding: "12px" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ padding: "5px" }}>
            SYSTEM SUBSCRIPTION
          </Typography>
          <Divider />
          <div>
            <Box height={20} />
            <Stack spacing={2}>
              <Grid container direction="row">
                <Typography gutterBottom variant="body1" component="div" sx={{ padding: "20px", width: 200 }}>
                  Department Name
                </Typography>
                <Autocomplete
                  onChange={handleDepartmentNameChange}
                  disablePortal
                  id="free-solo-demo"
                  freeSolo
                  options={departments}
                  value={selectedDepartmentName}
                  sx={{ width: 500 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>

              <Stack spacing={2}>
                <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "20px", width: 200 }}>
                    System Name
                  </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  {/* <Autocomplete
                  onChange={handleSystemChange}
                  disablePortal
                  id="combo-box-demo"
                  options={systemNames}
                  value={selectedSystem}
                  sx={{ width: 500 }}
                  renderInput={(params) => <TextField {...params}  />}
                /> */}
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    onChange={handleSystemChange}
                    options={systemNames}
                    value={selectedSystem}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>

                <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "20px", width: 200 }}>
                    Sytem Description
                  </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="free-solo-demo"
                    freeSolo
                    options={systemDescription}
                    onChange={handleSystemDescriptionChange}
                    value={selectedSystemDescription}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>

                <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "20px", width: 200 }}>
                    EventCount
                  </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="free-solo-demo"
                    freeSolo
                    options={eventCounts}
                    onChange={handleEventCountnChange}
                    value={selectedEventCount}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>

                <Grid container direction="row">
                  <Typography gutterBottom variant="body1" component="div" sx={{ padding: "20px", width: 200 }}>
                    Protocol
                  </Typography>
                  {/* <Box sx={{ lineHeight: 2, m: 1 }}>System Namesdasdasdasd :</Box> */}
                  <Autocomplete
                    disablePortal
                    id="free-solo-demo"
                    freeSolo
                    options={protocols}
                    sx={{ width: 500 }}
                    onChange={handleProtocolChange}
                    value={selectedProtocol}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Button variant="outlined" color="primary" size="large">
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => register(selectedDepartmentName, selectedSystem, selectedSystemDescription, selectedEventCount, selectedProtocol)}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </div>
        </Paper>
      </div>
    </>
  );  
};

export default MyForm;


// const renderAutocompleteField = (label, options, selectedValue, handleChange) => (
//   <Grid container direction="row" alignItems="center">
//     <Typography variant="body1" sx={{ padding: "20px", width: 200 }}>
//       {label}
//     </Typography>
//     <Autocomplete
//       disablePortal
//       id={`autocomplete-${label}`}
//       freeSolo
//       options={options}
//       value={selectedValue}
//       onChange={handleChange}
//       sx={{ width: 500 }}
//       renderInput={(params) => <TextField {...params} />}
//     />
//   </Grid>
// );


// return (
//   <Paper sx={{ maxWidth: 1000, margin: "auto", padding: "25px" }}>
//     <Typography variant="h5" sx={{ padding: "5px" }}>
//       SYSTEM SUBSCRIPTION
//     </Typography>
//     <Divider />
//     <Box my={2}>
//       <Stack spacing={2}>
//         {renderAutocompleteField("Department Name", departments, selectedDepartmentName, handleDepartmentNameChange)}
//         {renderAutocompleteField("System Name", systemNames, selectedSystem, handleSystemChange)}
//         {renderAutocompleteField("System Description", systemDescription, selectedSystemDescription, handleSystemDescriptionChange)}
//         {renderAutocompleteField("Event Count", eventCounts, selectedEventCount, handleEventCountnChange)}
//         {renderAutocompleteField("Protocol", protocols, selectedProtocol, handleProtocolChange)}
//       </Stack>
//       <Grid container spacing={4} justifyContent="center" mt={3}>
//         <Button variant="outlined" color="primary" size="large">
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={() => register(selectedDepartmentName, selectedSystem, selectedSystemDescription, selectedEventCount, selectedProtocol)}
//         >
//           Register
//         </Button>
//       </Grid>
//     </Box>
//   </Paper>
// );
// };

// export default MyForm;
