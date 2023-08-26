import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CharacterType } from './MyCard';
import { Box, IconButton, Typography } from '@mui/material';


type PropsType = {
    open: boolean;
    character:CharacterType;
    handleClose: ()=>void;
}
export default function MyModal({open, character, handleClose}:PropsType) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {'X'}
        </IconButton>
        <Box sx={{display:'flex', alignItems:'start',justifyContent:'start', gap:'1rem'}}>
            <img src={character.image} alt={character.name} />
        <Box sx={{display:'flex',flexDirection:'column', alignItems:'start',justifyContent:'start', gap:'0.3rem',paddingTop:'2rem'}}>
        <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
        <Typography variant="body2" component='div' color="text.secondary">
            {character.status} - {character.species}
          </Typography>
        <Typography variant="body2" component='div' color="text.secondary">
            {'Location: '}  {character.location?.name}
          </Typography>
        <Typography variant="body2" component='div' color="text.secondary">
            {'Episode: '}  {character.episode?.name}
          </Typography>
        </Box>
        </Box>
       <Box>
        <DialogContent>
          <DialogContentText>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore. Maxime nostrum nobis laboriosam minima voluptatem distinctio ullam quidem exercitationem obcaecati reprehenderit consequatur ut placeat, architecto non debitis illo. Quos.
          </DialogContentText>
        </DialogContent>
       </Box>
      </Dialog>
    </div>
  );
}
