import React from "react";
import Infor from "./Infor";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  infor: {
    flexGrow: 2,
  },
}));

export default function Footer(props) {
  const classes = useStyle();

  return (
    <Grid container className="Footer">
      <Grid item>
        <div style={{ background: "red" }}>
          <img
            src="https://bizweb.dktcdn.net/100/287/440/themes/775848/assets/davies.svg"
            alt=""
          />
        </div>
        <Typography component="div">
          <Box fontSize={18} fontWeight={700}>
            DAVIES BRAND
          </Box>
          <Box fontSize={18}>Thương hiệu thời trang đường phố.</Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontSize={22}>
            <h4>CHĂM SÓC KHÁCH HÀNG</h4>
          </Box>
          <Box fontSize={18}>
            {[
              "MEMBERSHIP & REWARD",
              "Hướng dẫn thanh toán",
              "Chính sách đổi trả",
              "Quy định & bảo mật ",
              "Góp ý / Liên hệ Nocturnal",
            ].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </Box>
        </Typography>
      </Grid>
      <Grid item className={classes.infor}>
        <Infor />
      </Grid>
    </Grid>
  );
}
