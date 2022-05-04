import { Paper, Grid } from "@mui/material";
function Comments({ comments }) {
  return (
    <div>
      {comments.length === 0 && 
        <h1 style={{color: 'azure'}}>No ones left any comments 😭</h1>
      }
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
                <p style={{ textAlign: "left" }}>{comment.comment}. </p>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}

export default Comments;
