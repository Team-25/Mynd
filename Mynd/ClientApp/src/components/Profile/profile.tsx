import { Button, Paper, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./profile.scss";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import InterestBlock from "./Interests/InterestBlock";

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

  const handleSave = () => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!gender || !age || age < 1 || !nickname || !orientation) {
      return false;
    }
    db.collection("user-data").doc(user?.uid).collection("info").add({
      gender: gender,
      age: age,
      nickname: nickname,
      orientation: orientation,
    });
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={7} className="profile_paper">
          <Grid item xs={12}>
            <Grid item xs={3}>
              <span>How do you feel?</span>
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
      <div className="content">
        <div className="user-details">
          <div className="sec1">
            <img src={photoURL} alt="profile-img" />
            <ul>
              <li>Hi</li>
            </ul>
            <a href="/logout">Logout</a>
          </div>
          <div className="sec2">
            <div className="upper">
              <h2>{displayName}</h2>
              <p>Loreum aoisdjasdlaskdh adshds ajdsa djsada dj</p>
            </div>
            <InterestBlock
              category="What are you interested in?"
              interests={[
                "swimming",
                "running",
                "archery",
                "javelin",
                "golf",
                "hurdles",
                "test1",
                "test2",
                "test3",
                "test4",
                "test5",
                "test6",
                "test7",
                "test8",
                "test9",
                "test10",
                "test11",
                "test12",
                "test13",
                "test14",
                "test15",
                "test16",
                "test17",
              ]}
            />
            <InterestBlock
              category="How are you feeling?"
              interests={[
                "Positive",
                "Happy",
                "Sad",
                "Overwhelmed",
                "Anxious",
                "Stressed",
                "Alright",
                "Excited",
                "Ready",
                "test4",
                "test5",
                "test6",
                "test7",
                "test8",
                "test9",
                "test10",
                "test11",
                "test12",
                "test13",
                "test14",
                "test15",
                "test16",
                "test17",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
