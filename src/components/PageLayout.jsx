/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import Header from "../pages/Header";

const PageLayout = ({ children }) => {
  return (
    <>
    <Header />
      <Box sx={{ flexGrow: 1, backgroundColor: "#ADBBDA", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", height: 'calc(100vh - 64px)'}}>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h1" align="center" mt="150px">SkillShare</Typography>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            {children}
          </Box>
          
        </Box>
      </Box>
    </>
    
  );
};

export default PageLayout;















// <>
    //   <Header/>
    //   <Box sx={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh-64px)'}}>
    //     <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
    //       <Typography variant="h1" align="center" mt="150px">SkillShare</Typography>
    //     </Box>
    //     <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
    //       {children}
    //     </Box>
    // </Box>
    // </>
