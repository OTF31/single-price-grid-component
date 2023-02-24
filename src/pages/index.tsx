import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box minHeight={"100vh"} maxWidth={"100vw"} display={"flex"} alignItems={"center"}>
      <Container maxWidth={"md"} disableGutters sx={{ bgcolor: "skyblue" }}>
        <Grid container>
          <Grid item xs={12} bgcolor={"red"}>
            <Typography>Join our community</Typography>
            <Typography>30-day, hassle-free money back guarantee</Typography>
            <Typography>
              Gain access to our full library of tutorials along with expert code reviews. Perfect
              for any developers who are serious about honing their skills.
            </Typography>
          </Grid>
          <Grid item xs={6} bgcolor={"blue"}>
            <Typography>Monthly Subscription</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography>$29</Typography>&nbsp;
              <Typography display={"inline"}>per month</Typography>
            </Box>
            <Typography>Full access for less than $1 a day</Typography>
          </Grid>
          <Grid item xs={6} bgcolor={"green"}>
            <Typography>Why Us</Typography>
            <Typography>Tutorials by industry experts</Typography>
            <Typography>Peer &amp; expert code review</Typography>
            <Typography>Coding exercises</Typography>
            <Typography>Access to our GitHub repos</Typography>
            <Typography>Community forum</Typography>
            <Typography>Flashcard decks</Typography>
            <Typography>New videos every week</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
