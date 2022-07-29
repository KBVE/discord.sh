// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Link
import Link from 'next/link'

import { _jd64 } from '@core/utils/hashstring';

// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** NextSeo Plugin
import { NextSeo } from 'next-seo';

// ** Advertisement Cards
import AdvertisementCard from 'views/dashboard/AdvertisementBannerCard'


const Roulette = () => {

  //let gIds = _jd64(); gIds = JSON.parse(gIds);
  const gIds = Object.entries(JSON.parse(_jd64()));

  gIds.forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });

  // const result = Object.entries(_jd64());


  return (
    <>
      <NextSeo
        title="Discord.sh Roulette!"
        description="Find a random server!"
        openGraph={{
          url: 'https://discord.sh/games/roulette',
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

          </Grid>
          <Grid item xs={12} md={8}>
            <AdvertisementCard />
          </Grid>
          <Grid item xs={12}>
            {JSON.stringify(gIds)}
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/">Return Home</Link>
          </Grid>
        </Grid>

      </ApexChartWrapper>


    </>
  )

}

export default Roulette


