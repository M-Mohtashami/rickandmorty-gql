import { useQuery } from "@apollo/client"
import { GET_ALL_CHARACTERS } from "./queries"
import { CharacterType } from "./components/MyCard"
import MyCard from "./components/MyCard";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MyModal from "./components/MyModal";
import MySkleton from "./components/MySkleton";


function App() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page }
  })
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>({
    id:'',
    image:'',
    name:'',
    species:'',
    status:''
    });
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(prev=>prev + 1);
        }
      },
      { threshold: 1 }
    );
  
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);
  // if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <>
      <Box sx={{width:'95%', textAlign:'center',padding:'2rem', margin:'2rem 0', borderBottom:'1px solid lightgray'}}>
      <Typography variant="h3" component="h3">Rick and Morty GraphQL App</Typography>
      </Box>
      {loading ? (<Grid container spacing={2} sx={{padding:'0 2rem'}}>
        {[1,2,3,4].map(idx =><MySkleton key={idx} />)}
      </Grid>
      ):
      (<Grid container spacing={2} sx={{padding:'0 2rem'}}>
                {data?.characters?.results.map((character:CharacterType) =>
                 <Grid item xs={12} sm={6} md={4} lg={3} onClick={()=>{
                  handleClickOpen();
                  setSelectedCharacter(character);
                 }}>
          <MyCard character={character} key={character.id} />
          </Grid>
        )}
      </Grid>)}
      <Typography ref={observerTarget} component='div' sx={{width:'95%',height:'2rem'}}/>
      <MyModal open={open} character={selectedCharacter} handleClose={handleClose}/>
    </>

  )
}

export default App
