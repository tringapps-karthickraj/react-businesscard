import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dpImg from '../assets/images/dp.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function BusinessCard() {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    image={dpImg}
                    height="400"
                    alt="profile"
                />
                <CardContent sx={{ backgroundColor: 'black', textAlign: 'center' }} >
                    <Typography sx={{ color: 'white' }} gutterBottom variant="h4" component="div">
                        Karthick Raj K
                    </Typography>
                    <Typography sx={{ color: 'brown' }} variant="h5" color="text.secondary">
                        React Developer
                    </Typography>
                    <Typography sx={{ color: 'white' }} variant="h6" color="text.secondary">
                        kr@gmail.com
                    </Typography>
                    <Typography className='emailLinkedin' variant="h6" color="text.secondary">
                        <Button variant="outlined" startIcon={<EmailIcon />}>
                            Email
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" startIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                    </Typography>
                    <Typography sx={{ color: 'white', textAlign: 'left', padding: '10px' }} variant="h6" color="text.secondary">
                        About:
                    </Typography>
                    <Typography sx={{ color: 'white', textAlign: 'left', padding: '10px' }} variant="h6" color="text.secondary">
                        Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look.
                        If someone wanted to build a website, for example, they might hire a front-end developer to create the site's layout.
                        The front-end developer determines where to place images, what the navigation should look like, and how to present the site.
                    </Typography>
                    <Typography sx={{ color: 'white', textAlign: 'left', padding: '10px' }} variant="h6" color="text.secondary">
                        Interests:
                    </Typography>
                    <Typography sx={{ color: 'white', textAlign: 'left', padding: '10px' }} variant="h6" color="text.secondary">
                        There are a lot of reasons why someone might want to become a front end developer:
                        Money: The job pays well and has strong career prospects. Challenge: You get to work on a variety of interesting things.
                        Impact: Front end development work is seen by everyone who interacts with a brand.
                    </Typography>

                </CardContent>
                <CardActions sx={{ backgroundColor: 'gray', textAlign: 'center' }}>
                    <div style={{ cursor: 'pointer' }}>
                        <TwitterIcon /> <FacebookIcon /> <InstagramIcon /> <GitHubIcon />
                    </div>

                </CardActions>
            </Card>
        </>
    )
}
