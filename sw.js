if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const o=e=>s(e,n),d={module:{uri:n},exports:r,require:o};a[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./publicstatic/4laOSt5M0ZnXCZZxJRyZH/_buildManifest.js",revision:"562403af9ea85cf5b35443e0d5c9e720"},{url:"./publicstatic/4laOSt5M0ZnXCZZxJRyZH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"./publicstatic/chunks/229.fff541d29f5da46f.js",revision:"fff541d29f5da46f"},{url:"./publicstatic/chunks/332-e6560e78bc6070c3.js",revision:"e6560e78bc6070c3"},{url:"./publicstatic/chunks/411-a5d46eb66311ac2a.js",revision:"a5d46eb66311ac2a"},{url:"./publicstatic/chunks/496-590a11e06db9a775.js",revision:"590a11e06db9a775"},{url:"./publicstatic/chunks/62-f45f3b0e1167f235.js",revision:"f45f3b0e1167f235"},{url:"./publicstatic/chunks/70cfe1b1.d14e3f8900f458d3.js",revision:"d14e3f8900f458d3"},{url:"./publicstatic/chunks/876-7df3dd616346e632.js",revision:"7df3dd616346e632"},{url:"./publicstatic/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"./publicstatic/chunks/main-532c465de39ea4c9.js",revision:"532c465de39ea4c9"},{url:"./publicstatic/chunks/pages/_app-93ca3cf5090e37c6.js",revision:"93ca3cf5090e37c6"},{url:"./publicstatic/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"./publicstatic/chunks/pages/about-e8c536b0c8c23c0b.js",revision:"e8c536b0c8c23c0b"},{url:"./publicstatic/chunks/pages/account-e5bfb454a1373fc7.js",revision:"e5bfb454a1373fc7"},{url:"./publicstatic/chunks/pages/bots-656784bad12f5daf.js",revision:"656784bad12f5daf"},{url:"./publicstatic/chunks/pages/games-ef0c51a98d3ea035.js",revision:"ef0c51a98d3ea035"},{url:"./publicstatic/chunks/pages/games/dice-180b92339688cc6d.js",revision:"180b92339688cc6d"},{url:"./publicstatic/chunks/pages/games/roulette-4ebe700554074ab2.js",revision:"4ebe700554074ab2"},{url:"./publicstatic/chunks/pages/games/slots-1402d7567df29e55.js",revision:"1402d7567df29e55"},{url:"./publicstatic/chunks/pages/guilds-ea3e31f51d435430.js",revision:"ea3e31f51d435430"},{url:"./publicstatic/chunks/pages/index-4d7e6702bd8088cc.js",revision:"4d7e6702bd8088cc"},{url:"./publicstatic/chunks/pages/kbve-015f665e7e684b73.js",revision:"015f665e7e684b73"},{url:"./publicstatic/chunks/pages/legal-c4d0f54051e5e726.js",revision:"c4d0f54051e5e726"},{url:"./publicstatic/chunks/pages/shop-80f708a0ced769fa.js",revision:"80f708a0ced769fa"},{url:"./publicstatic/chunks/pages/vote-06ec242efccfc5fb.js",revision:"06ec242efccfc5fb"},{url:"./publicstatic/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"./publicstatic/chunks/webpack-13cc7ee428640798.js",revision:"13cc7ee428640798"},{url:"./publicstatic/css/d4b83d5613991501.css",revision:"d4b83d5613991501"},{url:"/favicon.ico",revision:"d32de8079f797c6359d7f78db6bdfe94"},{url:"/images/apple-touch-icon.png",revision:"a6cb7f533c80104504be8e94d5e336d3"},{url:"/images/avatars/1.png",revision:"e293811547682b1edefac8f233ffa8d0"},{url:"/images/avatars/2.png",revision:"80504cd9c822568b3069462ce78d6200"},{url:"/images/avatars/3.png",revision:"4b40af12db5eaf5ef29d9c414bde7fc0"},{url:"/images/avatars/4.png",revision:"401a6c445d0b7a4cf7783a84037d2cc3"},{url:"/images/avatars/5.png",revision:"449c175cbc336e674ef43e00dac54da8"},{url:"/images/avatars/6.png",revision:"60bb3fc7e00b523d8ddace38d193b814"},{url:"/images/avatars/7.png",revision:"40de779845ab0ad03c7f6892967ef9af"},{url:"/images/avatars/8.png",revision:"527b8f8bba271f6be7e63973fbd02fe7"},{url:"/images/cards/analog-clock.jpg",revision:"8c9bdd3ec62b8d043feac5dd2a6b9801"},{url:"/images/cards/background-user.png",revision:"dea304d8812eb0f6fc7d22a299e894e8"},{url:"/images/cards/glass-house.png",revision:"889b97795184805be01369b5605f03b7"},{url:"/images/cards/iPhone-11-pro.png",revision:"3a7d213b8b04fb0225bed56e4ffc8a4d"},{url:"/images/cards/logo-aviato.png",revision:"c46859ea9843fc5a104d7eaa286c3943"},{url:"/images/cards/logo-bitbank.png",revision:"bf6d7e35ac4d8f21822793496a1d031b"},{url:"/images/cards/logo-zipcar.png",revision:"21e28abeec997a41bb9c8334a415816a"},{url:"/images/cards/paper-boat.png",revision:"989d6b880388d0eb7389b7cefd558ee4"},{url:"/images/cards/paypal.png",revision:"7843aa664efe68b435f8152f7cc5bb03"},{url:"/images/cards/watch-on-hand.jpg",revision:"524ab3d0eacac9b9093477e5f785ca1e"},{url:"/images/favicon.png",revision:"057b56a6c39c7ed81047d029daebc29f"},{url:"/images/logos/american-bank.png",revision:"215f8afc072906c3dbfdd0a76971fee9"},{url:"/images/logos/aws.png",revision:"bbe8baf145c552a3145106ae4e77ad01"},{url:"/images/logos/citi-bank.png",revision:"c76ac1a2262bbfba60ca79e3dc92977f"},{url:"/images/logos/digital-ocean.png",revision:"06a999f038302f186dd420dbc130e2b3"},{url:"/images/logos/github.png",revision:"c39c85a1071e4cd71a24f55d5a2bfe26"},{url:"/images/logos/google.png",revision:"41ff0a905ace8cadde561ec66af3941f"},{url:"/images/logos/gumroad.png",revision:"2dd09959611056b215a4fef108df479e"},{url:"/images/logos/mastercard-label.png",revision:"fcfc0a7189eadccbbcf8340425a70cb2"},{url:"/images/logos/slack.png",revision:"9fbbe9eef53d01add1ef2380f8ff7f8e"},{url:"/images/logos/stripe.png",revision:"30cdd89ccd014ad0e25c961f3949bf40"},{url:"/images/misc/chart.png",revision:"e9a4209579a3a37f43f9bd5ee6d80a7d"},{url:"/images/misc/materio-pro-banner.png",revision:"cf402f3d6be95ae625d87f2538e149fe"},{url:"/images/misc/paypal.png",revision:"535e87ebab93da7c9a89f9052d3ead82"},{url:"/images/misc/triangle-dark.png",revision:"b7cae01e3e1c0b922a339887dc949c7a"},{url:"/images/misc/triangle-light.png",revision:"36a91c21c5a5458f7ab4b974384e021d"},{url:"/images/misc/trophy.png",revision:"1b770c2a9c2e590016318544a3cf121c"},{url:"/images/misc/upgrade-banner-dark.png",revision:"c0bf8376c5f6fc941a64f8213a14dc0f"},{url:"/images/misc/upgrade-banner-light.png",revision:"8884f0aff69d12d0bb758e5bd9e48ea1"},{url:"/images/pages/401.png",revision:"a9f4d9e807c51516446f1b8951338cd5"},{url:"/images/pages/404.png",revision:"a34e6dc7af4a8bd1544bea747557fe17"},{url:"/images/pages/500.png",revision:"d9b604394239ec34491236235efed613"},{url:"/images/pages/auth-v1-mask-dark.png",revision:"b36861fb491e66a410d3aaf454ae240f"},{url:"/images/pages/auth-v1-mask-light.png",revision:"a2b8c84f88b7d9735b1ad214d0efb36e"},{url:"/images/pages/auth-v1-tree-2.png",revision:"3a4977b8b50e579d01db97cfaaf4a1b1"},{url:"/images/pages/auth-v1-tree.png",revision:"b874842ce6114ec5f83893b00e0a189c"},{url:"/images/pages/misc-mask-dark.png",revision:"a671883dacd46f48d52a0ab595020a21"},{url:"/images/pages/misc-mask-light.png",revision:"9b4542c8966961abb7947da8ecd11c01"},{url:"/images/pages/pose-m-1.png",revision:"dac21df98bc34f015ef84b80f863b234"},{url:"/images/pages/tree-2.png",revision:"bc9e42c5e84f5d5b7cf947af2183a8a5"},{url:"/images/pages/tree-3.png",revision:"89b446eaaed5d2cf8010737706d4ae90"},{url:"/images/pages/tree.png",revision:"6349bf72b77236b20f7f2005d7a414cf"},{url:"/manifest.json",revision:"dcc9906d33eddacbb259e03459e3b471"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/static/img/logo/android-chrome-192x192.png",revision:"23cfa06bc76dcd6ff9856c56fdc3538e"},{url:"/static/img/logo/android-chrome-512x512.png",revision:"ffc96c124c221946c179dacb337e87f4"},{url:"/static/img/logo/apple-touch-icon.png",revision:"68e7b7f7fcebf160132d361806424d12"},{url:"/static/img/logo/backup_svg.txt",revision:"e148cf88570abb5632799f87a7f5982a"},{url:"/static/img/logo/compressed_discord_logo_text.svg",revision:"0e04103d5cee9958ad3429d830afa5e8"},{url:"/static/img/logo/compressed_discordsh_unofficial_logo.svg",revision:"18e17b34ec4a214538ccde00ab407ee4"},{url:"/static/img/logo/compressed_dragon_daemon_head.svg",revision:"9b149e324bbca5e2515190c77e3329b5"},{url:"/static/img/logo/discord_logo_text.svg",revision:"3ee9d84455a32e559fca7b712449548e"},{url:"/static/img/logo/discordsh_compressed_logo.svg",revision:"60cb9bc715a7b676244b9d8d20292c0b"},{url:"/static/img/logo/discordsh_logo.svg",revision:"4db788f660d0ede981c39f80caca4330"},{url:"/static/img/logo/discordsh_logo.txt",revision:"d15c917d82779a9df5f038ddc9632fb5"},{url:"/static/img/logo/discordsh_unofficial_logo.svg",revision:"4aad8acf6f7d14ea9e7e005418525fc8"},{url:"/static/img/logo/dragon_daemon_head.svg",revision:"24ae11aaf6a065416fd73a0630994844"},{url:"/static/img/logo/favicon-16x16.png",revision:"72d2d8c80869e7b5342f40bbd58f82ce"},{url:"/static/img/logo/favicon-32x32.png",revision:"05d8988d3d0771268aa8cd3cfd88c6e7"},{url:"/static/img/logo/favicon.ico",revision:"d32de8079f797c6359d7f78db6bdfe94"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
