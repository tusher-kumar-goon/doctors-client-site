import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "Fluoride Treatment",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply a dentist You may feel a bit of a sting, but that's a reaction from or hygienist will apply done ",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "will numb the area and use a numbing gel before injecting a local anesthetic known as Lidocaine. You may feel a bit of a sting, but that's a reaction from the local anesthetic when it starts to block the nerve",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Is Teeth Whitening Safe For My Enamel? The yellow discoloration of your teeth is the most common sign of damaged enamel. This begs the question “does teeth whitening damage the enamel?” The answer is no,.",
        img: whitening
    },
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m: 2, }} variant="h4" component="div">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;