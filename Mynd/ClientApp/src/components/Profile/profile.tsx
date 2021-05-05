import { Button, Paper, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./profile.scss";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import InterestBlock from './Interests/InterestBlock';

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

  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [nickname, setNickname] = useState<string>("");
  const [orientation, setOrientation] = useState<string>("");

  const handleSave = () => (event: React.MouseEvent<HTMLElement>) => {};
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
              <span>Gender</span>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                InputProps={{ className: classes.input }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setGender(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={1}>
              <span>Age</span>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                InputProps={{ className: classes.input }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAge(parseInt(e.target.value));
                }}
              />
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <Grid item xs={1}>
              <span>Nickname</span>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                InputProps={{ className: classes.input }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNickname(e.target.value);
                }}
              />
            </Grid>
          </Grid>{" "}
          <Grid item xs={12}>
            <Grid item xs={1}>
              <span>Orientation</span>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                InputProps={{ className: classes.input }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setOrientation(e.target.value);
                }}
              />
            </Grid>
          </Grid>{" "}
          <Button variant="contained" color="primary" onClick={handleSave()}>
            Save
          </Button>
        </Grid>
      </Grid>
      <InterestBlock category="sports" interests={['swimming', 'running', 'archery', 'javelin', 'golf', 'hurdles']} colour="gray" />
    </div>
  );
}
export default ProfilePage;
