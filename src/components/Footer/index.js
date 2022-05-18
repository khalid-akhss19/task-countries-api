import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useStyles } from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footercontainer}>
        <div style={{ marginLeft: "30px" }}>
          <div className={classes.loggo}>
            <h1>
              <h4>Where in the World?</h4>
            </h1>
            <p className={classes.footerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ultricies enim lectus purus urna. Arcu nulla nisl,
              congue turpis tempor.
            </p>{" "}
          </div>
          <div
            className={classes.linkks}
            style={{
              marginTop: "",
              displayGrid: "none",
              display: "flex",

              paddingTop: "25px",
              flexWrap: "wrap",
              gap: "20px",
              width: "100%",
              backgroundColor: "#FFF",
            }}
          >
            <a href="https://www.facebook.com/" className={classes.inchortags}>
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/" className={classes.inchortags}>
              <YouTubeIcon />
            </a>
            <a href="https://twitter.com/" className={classes.inchortags}>
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/" className={classes.inchortags}>
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h2>
            <h4>Where in the World?</h4>
          </h2>
          <ul className={classes.list}>
            <li>Home</li>
            <li>Countries</li>
            <li>Regions</li>
            <li>Faq</li>
          </ul>
        </div>
        <div>
          <h2>About Us</h2>
          <ul className={classes.list}>
            <li>Profile</li>
            <li>Country</li>
            <li>Collections</li>
            <li>Activity</li>
          </ul>
        </div>
      </div>
      <hr className={classes.footerhr} />
    </>
  );
};
export default Footer;
