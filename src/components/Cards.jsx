import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Hotelcard=(props)=> {
  // const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <Card sx={{ width:'320px',height:'330px',borderRadius:'20px' }}>
      
      <CardMedia
        component="img"
        height="210px"
        image="./images/harikrushna.jpeg"
        alt="Paella dish"
      />
      <CardHeader sx={{padding:'10px',paddingBottom:'0px',paddingLeft:'15px'}}
       
        title={props.name}
        subheader={props.location}
      />
      <CardContent sx={{padding:'10px',paddingBottom:'0px',paddingLeft:'15px'}}>
        <Typography variant="body2" color="text.secondary">
          Flat <span style={{ color: "#2A88DF" }} > {props.discount} </span> off on total bill
        </Typography>
      </CardContent>
     
      
    </Card>
  );
}
export default Hotelcard;