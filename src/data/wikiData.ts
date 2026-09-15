export interface PrimeHero {
  id: string;
  name: string;
  role: 'Duelist' | 'Initiator' | 'Sentinel' | 'Controller' | 'Tank';
  health: number;
  speed: number;
  passiveAbility: string;
  ultimateAbility: string;
  description: string;
}

export interface HeroAbility {
  id: string;
  name: string;
  hero: string;
  type: 'Passive' | 'Tactical' | 'Mobility' | 'Ultimate';
  cooldown: string;
  damageOrBuff: string;
  description: string;
}

export interface PrimeWeapon {
  id: string;
  name: string;
  category: 'Assault Rifle' | 'SMG' | 'Sniper' | 'Shotgun' | 'Heavy';
  damage: number;
  fireRate: number;
  magazineSize: number;
  effectiveRange: string;
}

export interface PrimeCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'UPCOMING';
  dateAdded: string;
}

export const HEROES_DATA: PrimeHero[] = [
  {
    id: 'sir-jadhav',
    name: 'Sir Jadhav',
    role: 'Tank',
    health: 650,
    speed: 85,
    passiveAbility: 'Fortified Armor (Reduces explosive damage by 25%)',
    ultimateAbility: 'Indus Bastion (Deploys an invulnerable energy dome shield for 8 seconds)',
    description: 'A disciplined commander wielding heavy plasma shields to anchor Crown Sites and absorb enemy volleys.'
  },
  {
    id: 'void-mira',
    name: 'Mira the Phase Walker',
    role: 'Duelist',
    health: 450,
    speed: 110,
    passiveAbility: 'Kinetic Slip (Temporary speed boost after landing consecutive hits)',
    ultimateAbility: 'Dimensional Rift (Teleports behind enemy backlines with guaranteed critical strike ammo)',
    description: 'High-agility flanker specializing in close-quarters assassinations and vertical repositioning.'
  },
  {
    id: 'apex-kane',
    name: 'Kane Apex',
    role: 'Initiator',
    health: 500,
    speed: 100,
    passiveAbility: 'Thermal Scope (Highlights enemies through smoke for 2 seconds after scouting)',
    ultimateAbility: 'Orbital Recon Pulse (Reveals all enemy positions across the entire active sector)',
    description: 'Master scout who feeds tactical intel to the squad to set up synchronized team breaches.'
  },
  {
    id: 'cyber-aria',
    name: 'Aria Data-Weaver',
    role: 'Controller',
    health: 480,
    speed: 95,
    passiveAbility: 'Signal Jammer (Distorts enemy minimaps when within 15 studs)',
    ultimateAbility: 'Null Matrix (Creates a massive dampening field that disables enemy abilities for 6 seconds)',
    description: 'Hacker controller capable of turning the battlefield into an electronic denial zone.'
  },
  {
    id: 'strike-baron',
    name: 'Baron Von Vane',
    role: 'Duelist',
    health: 520,
    speed: 105,
    passiveAbility: 'Adrenaline Rush (+15% Reload speed upon scoring an elimination)',
    ultimateAbility: 'Barrage Cannon (Fires high-velocity micro-missiles clearing tight choke corridors)',
    description: 'Explosive assault specialist who punishes clustered defenders during Crown Site contest phases.'
  },
  {
    id: 'lotus-priestess',
    name: 'Lotus Botanica',
    role: 'Sentinel',
    health: 460,
    speed: 95,
    passiveAbility: 'Nectar Regeneration (Passive healing aura for nearby allies)',
    ultimateAbility: 'Sanctuary Bloom (Revives a fallen squadmate with full shields and health)',
    description: 'Life-weaving sentinel providing emergency sustains and area denial root vines.'
  },
  {
    id: 'shadow-spectre',
    name: 'Spectre-9',
    role: 'Duelist',
    health: 440,
    speed: 115,
    passiveAbility: 'Cloaked Stalker',
    ultimateAbility: 'Shadow Blade Execution',
    description: 'Stealth combat cyborg built for lone-wolf infiltration behind heavy bunker lines.'
  },
  {
    id: 'titan-goliath',
    name: 'Goliath Mark IV',
    role: 'Tank',
    health: 750,
    speed: 75,
    passiveAbility: 'Reinforced Plating',
    ultimateAbility: 'Seismic Shockwave',
    description: 'Massive automated mech unit with ground-slam stun capabilities.'
  }
];

export const HERO_ABILITIES_DATA: HeroAbility[] = [
  { id: 'indus-dome', name: 'Indus Energy Dome', hero: 'Sir Jadhav', type: 'Ultimate', cooldown: '90s', damageOrBuff: '5000 HP Shield', description: 'Blocks all incoming projectile damage while allies can fire through safely.' },
  { id: 'phase-dash', name: 'Phase Step', hero: 'Mira', type: 'Mobility', cooldown: '8s', damageOrBuff: 'Invulnerable for 0.8s', description: 'Dashes forward 12 studs through physical obstacles and player models.' },
  { id: 'recon-arrow', name: 'Sonar Tag Dart', hero: 'Kane Apex', type: 'Tactical', cooldown: '15s', damageOrBuff: 'Pings 3 targets', description: 'Sticks to surfaces and emits 3 sonar pings revealing wall silhouettes.' },
  { id: 'glitch-trap', name: 'Cyber EMP Trap', hero: 'Aria', type: 'Tactical', cooldown: '20s', damageOrBuff: '3s Silence + 80 Dmg', description: 'Deploys a hidden floor mine that detonates when stepped on.' },
  { id: 'missile-swarm', name: 'Micro-Rocket Salvo', hero: 'Baron', type: 'Tactical', cooldown: '14s', damageOrBuff: '180 Explosive Dmg', description: 'Fires four guided micro-rockets targeting the nearest painted target.' },
  { id: 'heal-spore', name: 'Healing Pollen Burst', hero: 'Lotus', type: 'Tactical', cooldown: '12s', damageOrBuff: '+150 Team HP', description: 'Throws a spore canister that bursts into a restorative cloud.' },
  { id: 'smoke-screen', name: 'Vapor Blind Cloud', hero: 'Aria', type: 'Tactical', cooldown: '18s', damageOrBuff: 'Vision Obscurity for 10s', description: 'Blocks line of sight and sniper lanes on contested capture points.' },
  { id: 'slam-crush', name: 'Graviton Pounce', hero: 'Sir Jadhav', type: 'Tactical', cooldown: '16s', damageOrBuff: '120 Dmg + 1.5s Stun', description: 'Leaps into the air and crashes down to stun enemy initiators.' }
];

export const WEAPONS_GEAR_DATA: PrimeWeapon[] = [
  { id: 'plasma-rifle-ar', name: 'Vortex-AR Plasma Rifle', category: 'Assault Rifle', damage: 32, fireRate: 650, magazineSize: 30, effectiveRange: 'Medium-Long' },
  { id: 'neutron-smg', name: 'Stinger Neutron SMG', category: 'SMG', damage: 21, fireRate: 950, magazineSize: 36, effectiveRange: 'Close' },
  { id: 'hyper-sniper-rail', name: 'Apex Railgun Sniper', category: 'Sniper', damage: 145, fireRate: 45, magazineSize: 5, effectiveRange: 'Extreme' },
  { id: 'magma-shotgun', name: 'Breacher Heavy Shotgun', category: 'Shotgun', damage: 110, fireRate: 80, magazineSize: 8, effectiveRange: 'Close' },
  { id: 'heavy-lmg-indus', name: 'Indus Devastator LMG', category: 'Heavy', damage: 28, fireRate: 550, magazineSize: 75, effectiveRange: 'Medium' },
  { id: 'burst-pistol-sidearm', name: 'Talon 3-Round Burst', category: 'SMG', damage: 26, fireRate: 400, magazineSize: 18, effectiveRange: 'Close-Medium' },
  { id: 'laser-carbine', name: 'Chronos Laser Carbine', category: 'Assault Rifle', damage: 29, fireRate: 700, magazineSize: 32, effectiveRange: 'Medium' },
  { id: 'plasma-bow-energy', name: 'Solaris Energy Bow', category: 'Sniper', damage: 95, fireRate: 60, magazineSize: 1, effectiveRange: 'Long' }
];

export const PROMO_CODES_DATA: PrimeCode[] = [
  { id: 'code-early2026', code: 'PRIME2026', reward: 'Free Sir Jadhav Champion Skin + 500 Credits', status: 'ACTIVE', dateAdded: '2026-09-05' },
  { id: 'code-supergaming', code: 'SUPERGAMING', reward: 'Indus Founder Gun Charm + 250 Coins', status: 'ACTIVE', dateAdded: '2026-09-04' },
  { id: 'code-fallpreview', code: 'FALLPREVIEW', reward: '2x EXP Booster (1h)', status: 'ACTIVE', dateAdded: '2026-09-03' },
  { id: 'code-heroesshooter', code: 'HEROESLAUNCH', reward: 'Rare Weapon Crate Token', status: 'ACTIVE', dateAdded: '2026-09-02' },
  { id: 'code-miraexclusive', code: 'MIRAPHASE', reward: 'Phase Walker Avatar Frame', status: 'ACTIVE', dateAdded: '2026-09-01' },
  { id: 'code-crownsite', code: 'CROWNSITE', reward: '100 Weapon Scrap Parts', status: 'ACTIVE', dateAdded: '2026-08-30' }
];
