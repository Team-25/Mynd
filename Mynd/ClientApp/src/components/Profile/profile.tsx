import { Paper, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./profile.scss";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(232, 241, 250)",
  },
}));

interface IProps {}

function ProfilePage(props: IProps) {
  const [user] = useAuthState(auth);
  let photoURL: string = user?.photoURL || "";
  let displayName: string = user?.displayName?.split(" ")[0] || "";
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className="profile_paper" variant="outlined">
            <img className="profile_page_img" src={photoURL} />
            <h2 className="profile_page_img">{displayName}</h2>
          </Paper>
        </Grid>
        <Grid item xs={7} className="profile_paper">
          <Grid item xs={12}>
            <Grid item xs={1}>
              <div>
                <span>Gender</span>
              </div>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="filled"
                InputProps={{ className: classes.input }}
                autoFocus
                margin="dense"
                id="name"
                label="data"
                type="name"
              />
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              variant="filled"
              InputProps={{ className: classes.input }}
              autoFocus
              margin="dense"
              id="name"
              label="data"
              type="name"
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              variant="filled"
              InputProps={{ className: classes.input }}
              autoFocus
              margin="dense"
              id="name"
              label="data"
              type="name"
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              variant="filled"
              InputProps={{ className: classes.input }}
              autoFocus
              margin="dense"
              id="name"
              label="data"
              type="name"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProfilePage;
