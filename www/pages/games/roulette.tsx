import Link from 'next/link'
import Router from 'next/router'
import {HashString, HashStringDecodeB64} from '@core/utils/hashstring';

export default function Roulette() {
  //const router = useRouter();
  // 927516202815852596
  const guild: RegExpMatchArray | null = (() => Router.asPath.match(/#([a-z0-9:=]+)/gi))()  
  
  const guildId: HashString = guild?.toString();
 
  console.log(guildId);
  let gIds = HashStringDecodeB64(guildId); 
  console.log(gIds);
  gIds = JSON.stringify(gIds);


  /**
   *  https://discord.sh/roulette/#ServerId:342732838598082562:ServerId:927516202815852596◈
   *  (CurrentMonth - LastMonth) / (LastMonth) * 100 
   * 
   */
  return (
    <div>
      <div>Roulette</div>
      <div>
        {gIds}
        Find a random discord server to join! Back to <Link href="/">Home</Link>
      </div>
    </div>
  )
}
