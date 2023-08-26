import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


function MySkleton() {

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
        <Box sx={{ width: 345, marginRight: 0.5, my: 5 }}>
          
            <Skeleton variant="rectangular" width={300} height={240} />
          
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="60%" />
              <Skeleton width="50%" />
            </Box>
          
        </Box>
    </Grid>
  );
}

export default MySkleton
