import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export type LocationType = {
  __typename: string;
   name: string
}
export type EpisodeType = {
  __typename: string;
   name: string
}
export type CharacterType = {
id:string;
image:string;
location?:LocationType;
episode?:EpisodeType;
name:string;
species:string
status:string;
__typename?: string;
}

type PropsType= {
  character:CharacterType;
}

export default function MyCard( { character } : PropsType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.status} - {character.species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
