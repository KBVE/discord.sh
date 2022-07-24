import Link from 'next/link'
import Router from 'next/router'

// Import GuildId
import { GuildID } from '@core/components/guilds/types'

export default function Roulette() {
  //const router = useRouter();
  // 927516202815852596
  const guild: RegExpMatchArray | null = (() => Router.asPath.match(/#([a-z0-9:&]+)/gi))()
  
  const guildId: GuildID = guild?.toString();

  /**
   *  https://discord.sh/roulette/#ServerId:342732838598082562:ServerId:927516202815852596◈
   *  (CurrentMonth - LastMonth) / (LastMonth) * 100 
   * 
   */
  return (
    <div>
      <div>Roulette</div>
      <div>
        {JSON.stringify({ guild, guildId })}
        Find a random discord server to join! Back to <Link href="/">Home</Link>
      </div>
    </div>
  )
}
