import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import MembersImage from "../img/member.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function AdminDashboard() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&usqp=CAU"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              />
            </div>
            <br /> <br />
            <div className="col-lg-12 text-center">
              <p>senurajayade@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={MembersImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Manage Members
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
