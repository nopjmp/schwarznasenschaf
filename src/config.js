const configProd = {
  channels: {
    bots: '299439031320838145',
    general: '309382568896233476',
    rules: '300991962876608512',
    welcome: '352215874771615754',
  },
  loggingChannels: {
    channels: '571157941118304256',
    memberships: '571158370610970625',
    messages: '571158292148256790',
    roles: '571158370610970625',
  },
  prefix: '?',
  roles: {
    modTeam: '489572548720328725',
    verified: '309382083724312576',
  },
  token: process.env.DISCORD_TOKEN,
}

const configDev = {
  channels: {
    bots: '643220214095413249',
    general: '643220200057077761',
    rules: '643220269959348249',
    welcome: '643220227118596144',
  },
  loggingChannels: {
    channels: '643220444991848454',
    memberships: '643220549526356009',
    messages: '643220517415026699',
    roles: '643220607500288000',
  },
  prefix: '!',
  roles: {
    modTeam: '537015927468851222',
    verified: '578072181540388864',
  },
  token: 'NTM1MTA0NjAxMTU0NzgxMTg0.XcYsgA.IS_hNk5dokv8NGuqDMIDw-Up0nM',
}

module.exports = process.env.NODE_ENV === 'production' ? configProd : configDev
