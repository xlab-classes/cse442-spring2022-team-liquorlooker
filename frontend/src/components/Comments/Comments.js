import { Paper, Grid } from "@mui/material";
function Comments(props) {
  const comments = [
    {
      userName: "Naqi",
      text: "Hi",
      time: 2,
    },
    {
      userName: "Kaneki",
      text: "Hello",
      time: 4,
    },
    {
      userName: "Shoto",
      text: "Hello",
      time: 4,
    },
  ];
  return (
    <div>

      {comments?.map((comment) => {
        return (
          <Paper
            elevation={7}
            sx={{
              margin: 2,
              padding: "20px 20px",
              backgroundColor: "#3b3d40",
              color: "azure",
            }}
          >
            <Grid container wrap="nowrap" spacing={1}>
              <Grid justifyContent="right" item xs zeroMinWidth spacing={1}>
                <h3 style={{ margin: 0, textAlign: "left" }}>
                  {comment.userName}
                </h3>
                <p style={{ textAlign: "left" }}>{comment.text}. </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted {comment.time} minutes ago
                </p>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}

export default Comments;
