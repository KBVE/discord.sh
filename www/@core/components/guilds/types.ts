export type GuildPrimaryCardProps = {
  guild: Guild,
}

export interface Guilds {
  Guilds: Guild[];
  Limit: number;
  Cursor: number;
}

export interface SocialLinks {
  Twitter: null | string;
  Reddit: null | string;
  Telegram: null | string;
  TikTok: null | string;
  Instagram: null | string;
  Facebook: null | string;
  YouTube: null | string;
}

export type GuildID = string | number | null | undefined

export interface Guild {
  _id: string;
  GuildId: number;
  DateCreated: number | string | Date;
  LastVote: number | string | Date;
  MonthlyTotalVote: number;
  LastMonthTotalVote: number;
  GuildToken: number;
  MemberCount: number;
  WebsiteURL: string;
  Tags: string[];
  Languages: string[];
  Verified: boolean;
  Blacklisted: boolean;
  SocialLinks: SocialLinks;
  NSFWLevel: number;
  Private: boolean;
  ApplicationFormURL: string;
  Type: string;
  Platform: string;
}

export interface DiscordCache {
  Guild: CachedGuild;
}

export type CachedGuildType = CachedGuild

export interface CachedGuild {
  id: string;
  name: string;
  icon: string;
  description: null | string;
  splash: string;
  discovery_splash: null | string;
  approximate_member_count: number;
  approximate_presence_count: number;
  features: string[];
  emojis: Emoji[];
  banner: string;
  owner_id: string;
  application_id: null | string;
  region: null | string;
  afk_channel_id: null | string;
  afk_timeout: number | string;
  system_channel_id: null | string;
  widget_enabled: boolean;
  widget_channel_id: string;
  verification_level: number;
  roles: Role[];
  default_message_notifications: number;
  mfa_level: number;
  explicit_content_filter: number;
  max_presences: null | string;
  max_members: number;
  max_video_channel_users: number;
  vanity_url_code: string;
  premium_tier: number;
  premium_subscription_count: number;
  system_channel_flags: number;
  preferred_locale: string;
  rules_channel_id: null | string;
  public_updates_channel_id: null | string;
}

export interface Emoji {
  name: string;
  roles: any[];
  id: string;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
}

export interface Role {
  id: string;
  name: string;
  permissions: string;
  position: number;
  color: number;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
}