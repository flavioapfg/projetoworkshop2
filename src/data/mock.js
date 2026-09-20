export const ME = {
  id: 'aa000000-0000-4000-8000-000000000001',
  name: 'Admin',
  handle: 'admin',
  email: 'admin@admin.com',
  bio: 'Conta admin do Gooday.',
  location: 'São Paulo, SP',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDKUrDgfFx7t8r7e5MDvRBEH5VpV1b7NhM1xsZU8uG1TNtRufZa5eCXvvUpzLW_7J3hzQBFk0K-7N8VJswiPgbwEgVvciiCPEPtPWW70Uwnt9r1hBRCuOuC_uJrMt65iT_Rdl1aHUATkzkWp4Vti8of4h9njBkjXtvGNfz_htP00cVxDe5W9R4tYspxRVTjD01ewU9V08D1dxIOTCTUW7g8hPky3cNCoLQ-6-2Joo-60yphNz9tCK3mBA',
  coverUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDics8IW8r5WRY9yoeqo0g1nuAwp00vJLn7vY0cNbJ_EFC1rPGDgTm8D9wpHvbU9-Un4vDiy_6l5o5qr2CrCgmtzGiwewJZcz6bBQaPuQIjNZi7iAAwFZZ5M6XXdZFnsBm5MH4_PNTgUME-bqBSPA7I6ZAEVmleCrwsmeogcjBnz3JeFTmBfA8CRsOAgCpq-65p6nbfl_NhGkddYEy6CGRjt669np-DIGcpmNwT2blGRSaZ_PqoAoSSUQ',
  followers: 128,
  following: 64,
  posts: 12,
  interests: ['corrida', 'nutrição', 'yoga'],
}

export const PEOPLE = [
  {
    id: 'a1111111-1111-4111-8111-111111111111',
    name: 'Marcos Vinícius',
    handle: 'marcos_v',
    location: 'São Paulo, SP',
    bio: 'Corrida, comida de verdade e rotina leve.',
    avatarUrl: ME.avatarUrl,
    online: true,
  },
  {
    id: 'a3333333-3333-4333-8333-333333333333',
    name: 'Renata Silva',
    handle: 'renata_silva',
    location: 'Campinas, SP',
    bio: 'Nutrição e constância.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPfMZUzVhc3ML2uKSn6zM2LEcdtuVfW75Y71JKIEk6cgythwu5xq03G4_G3Bx9myLceLK3Y3pEEF8xeTf8aZ8fe2KfspGew8uHj2XJbcRzHOeyfSB7m-sARvpTgrD0YRNyoNwlANaSOhU93INLbNOAMcuTntZa6a0_KBYfCfkTshKVrHzvX4mgqlaouFAzh7lqbgGXWoF-RtRK8ef3_xWaGmkWgHETIx9heja8FoEFAjKkdCesHbdSiw',
    online: true,
  },
  {
    id: 'a4444444-4444-4444-8444-444444444444',
    name: 'Bruno Mendes',
    handle: 'bruno_mendes',
    location: 'Santos, SP',
    bio: 'Ciclismo urbano.',
    avatarUrl: ME.avatarUrl,
    online: false,
  },
]

export const GROUPS = [
  {
    id: 'c1000000-0000-4000-8000-000000000001',
    name: 'Corrida para Iniciantes',
    slug: 'iniciantes',
    description: 'Primeiros quilômetros com apoio da comunidade.',
    privacy: 'PUBLIC',
    members: 128,
    joined: true,
    coverUrl: ME.coverUrl,
  },
  {
    id: 'c1000000-0000-4000-8000-000000000002',
    name: 'Ciclismo Urbano',
    slug: 'ciclismo',
    description: 'Pedal pela cidade com segurança.',
    privacy: 'PUBLIC',
    members: 86,
    joined: false,
    coverUrl: ME.coverUrl,
  },
  {
    id: 'c1000000-0000-4000-8000-000000000003',
    name: 'Nutrição Consciente',
    slug: 'nutricao',
    description: 'Comida de verdade no dia a dia.',
    privacy: 'PUBLIC',
    members: 204,
    joined: true,
    coverUrl: ME.coverUrl,
  },
]

export const POSTS = [
  {
    id: 'd1000000-0000-4000-8000-000000000001',
    authorId: PEOPLE[0].id,
    author: PEOPLE[0],
    body: 'Suco verde depois do treino. Quem mais?',
    imageUrl: ME.coverUrl,
    createdAt: 'há 12 min',
    group: GROUPS[2].name,
    likes: 24,
    comments: 5,
    tags: ['#gooday', '#nutrição'],
  },
  {
    id: 'd1000000-0000-4000-8000-000000000002',
    authorId: PEOPLE[1].id,
    author: PEOPLE[1],
    body: '5k de manhã. Ritmo leve e cabeça limpa.',
    imageUrl: ME.coverUrl,
    createdAt: 'há 1 h',
    group: GROUPS[0].name,
    likes: 41,
    comments: 8,
    tags: ['#corrida'],
  },
]

export const CONVERSATIONS = [
  {
    id: 'aa200000-0000-4000-8000-000000000001',
    peer: PEOPLE[1],
    preview: 'Combinado então 💪',
    time: '08:16',
    unread: 2,
  },
  {
    id: 'aa200000-0000-4000-8000-000000000002',
    peer: PEOPLE[2],
    preview: 'Bora domingo?',
    time: 'Ontem',
    unread: 0,
  },
]

export const MESSAGES = {
  'aa200000-0000-4000-8000-000000000001': [
    { id: '1', fromMe: false, body: 'Te encontro no parque.', time: '08:14' },
    { id: '2', fromMe: false, body: 'Combinado então 💪', time: '08:16' },
  ],
}

export const NOTIFICATIONS = [
  {
    id: '1',
    actor: PEOPLE[1],
    text: 'curtiu sua publicação',
    time: '12 min',
    unread: true,
  },
  {
    id: '2',
    actor: PEOPLE[2],
    text: 'começou a te seguir',
    time: '1 h',
    unread: true,
  },
]

export const RECENT_SEARCHES = ['corrida', 'nutrição', 'ciclismo urbano', 'yoga']
export const REACTION_EMOJIS = ['❤️', '👏', '🔥', '😍', '🌱', '💪', '😊', '🙌']

/** Stories do carrossel da Home (exceto o card "Você" de criar) */
export const FEED_STORIES = [
  {
    id: 's-bruno',
    handle: '@bruno',
    name: 'Bruno Mendes',
    time: 'há 45 min',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnLE48ussCu7ilJ08qy5_jJzjV_KKlJwT8j6XweByOQL4yw7uyPtnQwAwXCvFpOVXq-reneWM-U1kbKP1g1M8ZQZ3g5cl2hPSuxKabgU9khc8nzdYfnMIb5iE9hzn3FrAFt3JxByVIfGMP2huXJ8MIP6gZZxa68p50Ul79zDK2VAnQKI-qxl_Xsc_X9CPHY_fJY4kc62_bG8tnA1y-G38nx7AnGYbuWLCXaWEAA0LOTYQkQS-A4Kbuhw',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYBLgRqVxtqzK2eLqXLFPDhl799ifAIJP85ZDDLVNyi82L-VMny3iCGdygomlSMGi4_Ra9dkbq8ZdR0qxTpnfMs0Tl9_m_ZUiV8k_OoKYSoFlWDa5qgGnKv_7FZZOQUsYWAmMw_G69NIWEEQGjlFtc9R0mlXht0DnvC62FCqU-1mrIz9zawP04cDD3yM8Ouo05EgwAsLAKroXZyZQr8Hq_VBc-v9DalDGYzbsAYXThoYIHjldPsE7RBg',
  },
  {
    id: 's-renata',
    handle: '@renata',
    name: 'Renata Silva',
    time: 'há 1 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnODJyhdMxwP-wsXs878ZBKkqxMwnHADSmCQdXwj5jT5ZZgWIaqYUmFWKOVqNkPOBfNu_PUJptveQZS0_K4zKQGajGBfqIok-KJFXZr8EzThhqAJsKPaccufPQP-8yXs7ekv02cLDr_Bpry9Vh-qsEmw-c82gYBT2AqIrmdCZKV1hEN80ifPGR46gbOu8Kgdf8k2nFDIj3H_9Mk1VFU-HkdssBOY3edZCca5-UATi4Pooae7CD92GTRg',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRkBILKK6h6LkaEdV-QccBIZnP8hGm-HIQ86dkcuHW2bVyVxmoBw1BDndW7e13bxmGjII4vZEae14YzDj6pl2SqMkMd71OgguFRmYH4SuN3_AvfJY70u_qkn-BaOFHm_BiGBhVj-E-jm11H-Zl24rJ0X4vhYsvLZvhl2UTUF3Oy5yQgU4YmM02M1UtLmq1btK_x3p50UR9bKbCypTP8MIgh5nAh68hmIqaOLuFwq9LAYYwfT3oD_DwlA',
  },
  {
    id: 's-nicole',
    handle: '@nicole',
    name: 'Nicole Bueno',
    time: 'há 2 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlCpfXPUBtErkEwtnz0S4m3BzYkl95W37ktewLBvN9gYmZrU4NpctN8RCVEKrAcTJe4biqv23B-5yhvzqfSM8cb_LsE-njxcrvzpY1Tw7XM9urpYVikrJBptQbuBTjOiFpA9-y1sHhNKdh-mTc8t_FRFpkd_1TCrFuOTV_xn1OhKtJKoixKWa4FQzdQYY3WUiFvv2qLSnu6Fq5zBlbe8GTH6whyFUNsDv0-W-gICk0Q3n8eZH-z8I06g',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiARLItxxkxV41PFsMj45vvFKknGMs25x2chpfdDSPl_5bY_0E0kEoVT8k3kZoR-iMT6SlTNe_RwQZGPcvmHCQ4NdVIaok0qNb1UQR0reMD3tP2JvUeRSaXpgeS2IS5HapVXKSaWy__FBtL5LWZo8O5M3TR1AfEwtKrbvIeitUO0vVv9ic2xFUBGUYXr3Nej6l-B7NgPK-uVc9GzFpx87CqO647gq347d7dr10BHA9h33mbj_wPXaxMQ',
  },
  {
    id: 's-tiago',
    handle: '@tiago',
    name: 'Tiago Souza',
    time: 'há 3 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfOYfd7xko48sOX1NrKuzSVPA61kbf8X-Rq5-x3b6pDnUeVZCnkeg-Bunckor8ywAsTnbyh9iOkARoAc-zACUmxMZTaes9-Iqvdw0lYrFhM-nPTUvihB4_1ohyj8COCxcwASFVMJw7Nq_W-iiQgetKpCFqEuWPzqJyNtrip-gJm5e3YhvOj_RQzWvEcfmS8DySBRSb3Rl7Zhfq0kbw6q0XRzf2nbyhKTDXTiKYEX73sgrsidZcKlIzrA',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfOYfd7xko48sOX1NrKuzSVPA61kbf8X-Rq5-x3b6pDnUeVZCnkeg-Bunckor8ywAsTnbyh9iOkARoAc-zACUmxMZTaes9-Iqvdw0lYrFhM-nPTUvihB4_1ohyj8COCxcwASFVMJw7Nq_W-iiQgetKpCFqEuWPzqJyNtrip-gJm5e3YhvOj_RQzWvEcfmS8DySBRSb3Rl7Zhfq0kbw6q0XRzf2nbyhKTDXTiKYEX73sgrsidZcKlIzrA',
  },
  {
    id: 's-lidiane',
    handle: '@lidiane',
    name: 'Lidiane Costa',
    time: 'há 4 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJb-ydMK5nge19R40ew1U5w3bsL78s4GOih8uDR5FjGyF8rKivFO2rQtRoJOk2t2RkN2RjhGyyEVNqzS9QjkFqk-RB-myV2HxpZnO922x0Wj5azfkL4lJnWH61zgLfImI30Hv32e1P_6z61yZ3qSk1slzwN3TbBfUIqhaEXCEzMWmL30SE1Eb0yg9ITdlTQ__fIT8DZXRGKV_la1Ky2m6zD92uwSYJCr78-yoLzdHY8feXuwbM7nKTrA',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBero_x5-AOYwAVYfoZZU9APr0uE6DEW9qBvnRyjtgqwLcIwubomOzvgIRuhK8eOM3fW4QPNBUhVPSonbQVZtKvT3SAm6bJnU5vSIVMqPpAB6_q3_-ejp9DXvmyfTSXBBbBLJrCc20EuS11jaIawGgHfRw_s7TarYiBgF0bH_QZ4tD3uQHKMApWSc7RB817j7rVdBwyS7u8AIXmLxm7u-VSbHU1vKA_TuLKD_O-AhLNNlrGSTMZqDzJRA',
  },
  {
    id: 's-pedro',
    handle: '@pedro',
    name: 'Pedro Lima',
    time: 'há 5 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_GYbyhNNhiu5FTMqfpPrniJ5sR8Nju2wpc9_5VVErZyny1_2L62fpiqKWH4zhLPaMQUF-8Mhaiotj_fBkaZ2CrcyQlTtY9WcRUKdJ8lM9pNfpJ-39s5SkdFlP9XFFOepqHO7kpkAAptaDKkJOvz9qeFxNnmy7uDXknGvli7kCw6zMWTF-_wMUCOahuHumtcO2fiqVnez8wWHxbrKMnmWN1Jf0SWzlEp_Qesw4Ai1q2EXPSPFvVJLtrQ',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAybB26m3zRHfQ3JzClgeUruFv2RFbLE51NMBA9Ifms1ILhQTTaJ8dM-ctu91J97Y4Fl2xlonBiMOL7rThBpzqeUoMDiE3GTyOtWGZqvo57yXVMVrGfTNX2abQpjDLRMtJNsJpBxOss00DdGt-sr9JR49BKgUgI-qdDpdayq7tQmmAd_H7KX0TL1o6vEYcSE8r0HCJ1XZec_VRuSVET1DJRkt2dtIsBqpwNCas3ZAnzsPBPN1DJbk_U-Q',
  },
  {
    id: 's-marina',
    handle: '@marina',
    name: 'Marina Rocha',
    time: 'há 6 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAe2NkXwC3eQyoVQ-m5akD7i_ha7HN04wNjMe5wJTzGTb1GWod7EzejNU7yS6MxmeRK5djnorI9sUDW1VnoHHUPMAzzDZJZDO4wSExa-MQaCqxtSLWowSffb5UW9zGORFPuQOppiR2NTEupyiYXnOs5BGedTZTDQVyYl6v-UoBBuj79dWTr7uDvqkyvP-ju6GB-mSv_yJFwbkotCl7m-AU7Cwfc0p9q0M67dLyDh-P3WiWqNlklYoFDeQ',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAty2qV_7Esul_nzJDfC83G2mgoR7ZT6uh2CKCqC1NsC-f4bpLTp8rfwQvxGNhDrxzD4W4srvBD5L9yljLV4SP3DNOIigq4nMbr4W5KGXphNTcJyVeBJ6ioEOu-68n9uG3MvVz_L4U_0YALjTRKc9cilbg8dWHWrHIb7JkWe-5H5lMq85TJcimum7yQUKW_cYxJxqPh9enRO1rYkZdWB9vsUuT0s1dWUNexyb-K2YmUR6lCbaddgPhgKQ',
  },
  {
    id: 's-camila',
    handle: '@camila',
    name: 'Camila Ferreira',
    time: 'há 8 h',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPkpccCAcnvW_Ut7nCxgm1BLcbwFBIrs3yGhy037CfGnfFP0GmsrqIpoOqFi4s7KV2pgUt2BUUTjmLcWGCGMvt_oDy45dJ6zsv-ODT3ZmBo0AB9W1GqlcEAF_5U4RKzPTnN1k4hpz-sM08Hb0ygHtIFjVgmmh205CVKnCGVLjL0AvSW6hNZ40bGAHjnaJNIe7qBATtVtapOF9D02DURsTtPF0YyMZRB915Texu1kpcWKhYPpos19P3qA',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDynl4mSATRPfJTp1LWskAGTGRQYHjbMY-XbkEiUY9v6kwqOinIM2rnug21NVoVsqGStYRcyppwJ9Fm3VQ4sXoUoOeVTDVI0eqsdeEHxkfGxkvKqtA9PMLZEEcLoqUb4x-eB04DVDIuXwjeX3-X37vMjBedyKRqAMwTeSjirylV2rFLVALd7Yi0g8I0khw27rCPY4RIEjER5hI9TRclLy4we8DzNe5vpSrHyWC2O_E7hlbDjoOE__kO0A',
  },
]

export const CREATE_STORY_COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDiXtZb6McexKad-T6S_ZjaIt_AyUEiuhkb9RN6A5cvdCkPa4-GMA-uQCWINtrJMdGyQZcqF_gMyEUhCZKL0TVsNHTlaFFebFUFbek5h4G2rWIEJrz7UQvcwAtE-zqWEuQUdNIC7lXT47Qcor6LCiYCsRdd_EVNMmxKChmeUpr1qut7eQNuF8-vMF923kMqM7Y86robj0LFxtBWTD22KnXHaOCILc8xu-8j_YsmuUubALQti4aQD0FDSA'
