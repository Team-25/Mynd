import StudentReviewComponent from "./student-reviews-component";
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Image1 from './../../../img/person1.jpg'

interface IProps {

}

function StudentReviewsPage(props: IProps) {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <StudentReviewComponent
                        image={Image1}
                        name="John"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </Grid>
                <Grid item xs={3}>
                    <StudentReviewComponent
                        image={Image1}
                        name="John"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </Grid>
                <Grid item xs={3}>
                    <StudentReviewComponent
                        image={Image1}
                        name="John"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </Grid>
                <Grid item xs={3}>
                    <StudentReviewComponent
                        image={Image1}
                        name="John"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </Grid>

            </Grid>

        </div>
    )
}
export default StudentReviewsPage;
