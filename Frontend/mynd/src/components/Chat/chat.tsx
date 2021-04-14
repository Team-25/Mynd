import { TextField, Button, Grid } from '@material-ui/core';
import React from 'react';

interface IProps {
}

const Chat = (props: IProps) => {
    return (
        <>
            <div className="chat-container">
                <div className="matcher message"> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Cursus sit amet dictum sit amet. Condimentum mattis pellentesque id nibh. Elit at imperdiet dui accumsan. 
                        Aliquet nec ullamcorper sit amet risus nullam eget. Dolor sit amet consectetur adipiscing. 
                        Quam pellentesque nec nam aliquam sem et tortor consequat id. Diam vulputate ut pharetra sit amet aliquam id diam. 
                        Nec nam aliquam sem et tortor consequat id porta nibh. Tincidunt eget nullam non nisi. 
                        Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Tortor pretium viverra suspendisse potenti nullam. 
                        Quis imperdiet massa tincidunt nunc pulvinar sapien. Dapibus ultrices in iaculis nunc sed augue lacus viverra. 
                        Ut lectus arcu bibendum at varius. Eget gravida cum sociis natoque penatibus et magnis dis. 
                        Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Pulvinar pellentesque habitant morbi tristique senectus et netus et.
                        Viverra accumsan in nisl nisi scelerisque eu ultrices.</p>
                </div>
                <div className="user message"> 
                    <p>HELLO BACK</p>
                </div>
                <div className="matcher message"> 
                    <p> Proin sed libero enim sed faucibus turpis. Lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet luctus venenatis lectus magna fringilla urna. 
                        Vel pharetra vel turpis nunc. Fames ac turpis egestas sed tempus urna. Velit scelerisque in dictum non consectetur a erat. 
                        Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Tincidunt vitae semper quis lectus nulla. At lectus urna duis convallis. 
                        Proin sed libero enim sed faucibus turpis in eu mi. Arcu dictum varius duis at consectetur.
                    </p>
                </div>
                <div className="matcher message"> 
                    <p>
                        Quis vel eros donec ac odio tempor orci dapibus. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Feugiat nibh sed pulvinar proin gravida hendrerit. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Lectus sit amet est placerat in egestas. Nam aliquam sem et tortor consequat id porta nibh venenatis. Blandit massa enim nec dui. Nulla pellentesque dignissim enim sit amet. Euismod lacinia at quis risus sed vulputate odio ut enim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. In est ante in nibh mauris cursus mattis. Pellentesque dignissim enim sit amet. Congue nisi vitae suscipit tellus mauris a. Felis eget nunc lobortis mattis aliquam. Vitae justo eget magna fermentum iaculis eu non diam. Pellentesque adipiscing commodo elit at imperdiet dui. Sed turpis tincidunt id aliquet risus feugiat in ante.
                    </p>
                </div>
                <div className="user message"> 
                    <p> Proin sed libero enim sed faucibus turpis. Lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet luctus venenatis lectus magna fringilla urna. 
                        Vel pharetra vel turpis nunc. Fames ac turpis egestas sed tempus urna. Velit scelerisque in dictum non consectetur a erat. 
                        Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Tincidunt vitae semper quis lectus nulla. At lectus urna duis convallis. 
                        Proin sed libero enim sed faucibus turpis in eu mi. Arcu dictum varius duis at consectetur.
                    </p>
                </div>
                <div className="user message"> 
                    <p> Proin sed libero enim sed faucibus turpis. Lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet luctus venenatis lectus magna fringilla urna. 
                        Vel pharetra vel turpis nunc. Fames ac turpis egestas sed tempus urna. Velit scelerisque in dictum non consectetur a erat. 
                        Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Tincidunt vitae semper quis lectus nulla. At lectus urna duis convallis. 
                        Proin sed libero enim sed faucibus turpis in eu mi. Arcu dictum varius duis at consectetur.
                    </p>
                </div>
            </div>
            <div className="chat-message-input">
                <Grid container>
                    <Grid item xs={11}>
                        <TextField fullWidth id="outlined" />
                    </Grid>
                    <Grid item xs={1}>
                        <Button type="submit" fullWidth variant="contained" color="primary" onSubmit={() =>console.log("HEWOOO")}> Send </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Chat
