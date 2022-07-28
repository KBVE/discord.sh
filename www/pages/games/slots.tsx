// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Trophy Comp Test
import SlotsTrophy from 'views/dashboard/games/slots/SlotsTrophy'
import SlotsTable from 'views/dashboard/games/slots/SlotsTable'


// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** NextSeo Plugin
import { NextSeo } from 'next-seo';

// ** Advertisement Cards
import AdvertisementCard from 'views/dashboard/AdvertisementBannerCard'


const Slots = () => {
    return (
        <>
            <NextSeo
                title="Discord.sh Slots!"
                description="Spin to Win! Yay!" 
                openGraph={{
                    url: 'https://discord.sh/slots',
                    title: 'Discord.sh Slots! Spin 2 Win',
                    description: 'Loads of free daily prizes for all our users!',
                    images: [
                      {
                        url: 'https://cache.discord.sh/static/img/opengraph/discordsh_banner_ad_1.png',
                        width: 600,
                        height: 200,
                        alt: 'Discord.sh Banner',
                        type: 'image/png',
                      },
                      {
                        url: 'https://cache.discord.sh/static/img/opengraph/discordsh_background.png',
                        width: 600,
                        height: 800,
                        alt: 'Discord.sh Background',
                        type: 'image/png',
                      },
                     
                    ],
                    site_name: 'Discord.sh',
                  }}
                  twitter={{
                    handle: '@h0lybyte',
                    site: '@h0lybyte',
                    cardType: 'summary_large_image',
                  }}
                
            />

            <ApexChartWrapper>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <SlotsTrophy />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <AdvertisementCard />
                    </Grid>
                    <Grid item xs={12}>
                        <SlotsTable />
                    </Grid>
                </Grid>

            </ApexChartWrapper>
            
        
        </>
    )


}


export default Slots
