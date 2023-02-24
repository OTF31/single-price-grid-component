import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const { palette, breakpoints, transitions } = theme;
  const { lightGray, cyan, brightYellow, grayishBlue } = palette;
  const mobile = useMediaQuery(breakpoints.down("md"));

  return (
    <Box
      minHeight={"100vh"}
      maxWidth={"100vw"}
      display={"flex"}
      alignItems={"center"}
      sx={{ background: lightGray.main }}
      padding={1}
    >
      <Container
        maxWidth={mobile ? "xs" : "sm"}
        sx={{
          borderRadius: 2,
          boxShadow: "0px 20px 20px 0px hsl(218, 22%, 85%)",
          overflow: "hidden",
          transition: transitions.create(["max-width"], {
            duration: transitions.duration.standard,
          }),
        }}
        disableGutters
      >
        <Grid container columns={mobile ? 6 : 12}>
          <Grid item xs={12} padding={4} bgcolor={"white"}>
            <Typography fontWeight={"700"} fontSize={"1.3rem"} color={cyan.main}>
              Join our community
            </Typography>
            <Typography fontWeight={"700"} marginTop={2} marginBottom={1} color={brightYellow.main}>
              30-day, hassle-free money back guarantee
            </Typography>
            <Typography color={grayishBlue.main}>
              Gain access to our full library of tutorials along with expert code reviews. Perfect
              for any developers who are serious about honing their skills.
            </Typography>
          </Grid>
          <Grid item xs={6} padding={4} bgcolor={cyan.main}>
            <Typography color={"white"} fontWeight={"700"}>
              Monthly Subscription
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} marginTop={1}>
              <Typography color={"white"} fontSize={"1.6rem"} fontWeight={"700"} marginRight={1}>
                $29
              </Typography>
              &nbsp;
              <Typography color={lightGray.main} fontSize={"0.8rem"}>
                per month
              </Typography>
            </Box>
            <Typography
              marginBottom={3}
              fontSize={"0.8rem"}
              color={lightGray.main}
              fontWeight={"700"}
            >
              Full access for less than $1 a day
            </Typography>
            <Button
              fullWidth
              sx={{
                textTransform: "capitalize",
                color: lightGray.main,
                fontWeight: "700",
                background: brightYellow.main,
                "&:hover": { background: brightYellow.dark },
              }}
            >
              Sign up
            </Button>
          </Grid>
          <Grid item xs={6} padding={4} bgcolor={cyan.light}>
            <Typography marginBottom={1} color={"white"} fontWeight={"700"}>
              Why Us
            </Typography>
            <Box color={"white"}>
              <Typography fontSize={"0.8rem"}>Tutorials by industry experts</Typography>
              <Typography fontSize={"0.8rem"}>Peer &amp; expert code review</Typography>
              <Typography fontSize={"0.8rem"}>Coding exercises</Typography>
              <Typography fontSize={"0.8rem"}>Access to our GitHub repos</Typography>
              <Typography fontSize={"0.8rem"}>Community forum</Typography>
              <Typography fontSize={"0.8rem"}>Flashcard decks</Typography>
              <Typography fontSize={"0.8rem"}>New videos every week</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
