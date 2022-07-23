// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types Imports
import { GuildPrimaryCardProps, CachedGuildType } from '@core/components/guilds/types'

const getCachedGuild = (GuildId: number): CachedGuildType | null =>
  !GuildId ? null : ({
    "id": "2909267986263572999",
    "name": "Mason's Test Server",
    "icon": "389030ec9db118cb5b85a732333b7c98",
    "description": null,
    "splash": "75610b05a0dd09ec2c3c7df9f6975ea0",
    "discovery_splash": null,
    "approximate_member_count": 2,
    "approximate_presence_count": 2,
    "features": [
      "INVITE_SPLASH",
      "VANITY_URL",
      "COMMERCE",
      "BANNER",
      "NEWS",
      "VERIFIED",
      "VIP_REGIONS"
    ],
    "emojis": [
      {
        "name": "ultrafastparrot",
        "roles": [],
        "id": "393564762228785161",
        "require_colons": true,
        "managed": false,
        "animated": true,
        "available": true
      }
    ],
    "banner": "5c3cb8d1bc159937fffe7e641ec96ca7",
    "owner_id": "53908232506183680",
    "application_id": null,
    "region": null,
    "afk_channel_id": null,
    "afk_timeout": 300,
    "system_channel_id": null,
    "widget_enabled": true,
    "widget_channel_id": "639513352485470208",
    "verification_level": 0,
    "roles": [
      {
        "id": "2909267986263572999",
        "name": "@everyone",
        "permissions": "49794752",
        "position": 0,
        "color": 0,
        "hoist": false,
        "managed": false,
        "mentionable": false
      }
    ],
    "default_message_notifications": 1,
    "mfa_level": 0,
    "explicit_content_filter": 0,
    "max_presences": null,
    "max_members": 250000,
    "max_video_channel_users": 25,
    "vanity_url_code": "no",
    "premium_tier": 0,
    "premium_subscription_count": 0,
    "system_channel_flags": 0,
    "preferred_locale": "en-US",
    "rules_channel_id": null,
    "public_updates_channel_id": null
  })

const GuildCardPrimary = (props: GuildPrimaryCardProps) => {
  // ** Props
  const {
    guild
  } = props

  const cachedGuild = getCachedGuild(guild.GuildId)

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', marginBottom: 5.5, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `common.white` }}>
            {cachedGuild?.icon}
          </Avatar>
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>guild name</Typography>
        <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
          <Typography variant='h6' sx={{ mr: 2 }}>
            {guild.MonthlyTotalVote}
          </Typography>
          <Typography
            component='sup'
            variant='caption'
            sx={{ color: guild.MonthlyTotalVote > guild.LastMonthTotalVote ? 'success.main' : 'error.main' }}
          >
            {((guild.MonthlyTotalVote - guild.LastMonthTotalVote) / (guild.LastMonthTotalVote)) * 100}
          </Typography>
        </Box>
        <Typography variant='caption'>guild description</Typography>
      </CardContent>
    </Card>
  )
}

export default GuildCardPrimary

GuildCardPrimary.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
