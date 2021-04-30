import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

interface IProps {}

function ProfilePage(props: IProps) {
  const [user] = useAuthState(auth);
  let photoURL: string = user?.photoURL || "";
  let displayName: string = user?.displayName?.split(" ")[0] || "";

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper variant="outlined">
            <img src={photoURL} />
            <h2>{displayName}</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProfilePage;
