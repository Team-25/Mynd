import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {}

function ProfilePage(props: IProps) {
  const [user] = useAuthState(auth);
  let photoURL: string = user?.photoURL || "";
  let displayName: string = "Hi, " + (user?.displayName?.split(" ")[0] || "");

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper variant="outlined">
            <img src="url" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProfilePage;
