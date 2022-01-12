const imgs = {
  beacon:[
    "https://i.imgur.com/KBrneBB.jpg",
    "https://i.imgur.com/5y3csg1.jpg",
    "https://i.imgur.com/WzDW6Is.jpg",
    "https://i.imgur.com/qSKetQi.jpg",
    "https://i.imgur.com/sHkuFkK.jpg",
    "https://i.imgur.com/IqzAdj5.jpg",
    "https://i.imgur.com/PIHJCzV.jpg",
    "https://i.imgur.com/KAAYo8i.jpg",
    "https://i.imgur.com/9HBXg29.jpg",
  ],
  folk:[
    "https://i.imgur.com/xfhAQvr.jpg",
    "https://i.imgur.com/i7edlys.jpg",
    "https://i.imgur.com/Dc9Qqw3.jpg",
    "https://i.imgur.com/yyEyR2x.jpg",
    "https://i.imgur.com/N5fL7c5.jpg",
    "https://i.imgur.com/FHKbDHL.jpg",
    "https://i.imgur.com/n8tk54B.jpg",
    "https://i.imgur.com/J97oxmm.jpg",
  ],
  chess:[
    "https://i.imgur.com/aKdXFBm.jpg",
    "https://i.imgur.com/M8fDWkv.jpg",
    "https://i.imgur.com/tFXzVgn.jpg",
    "https://i.imgur.com/LdXmz93.jpg",
    "https://i.imgur.com/27TpoR1.jpg",
    "https://i.imgur.com/vk0wRdA.jpg",
    "https://i.imgur.com/LpSvk0x.jpg",
    "https://i.imgur.com/Se1Y02p.jpg",
    "https://i.imgur.com/il5IdAE.jpg",
    "https://i.imgur.com/dExmz1c.jpg",
  ],
  mexa:[
    "https://i.imgur.com/vE3jCAQ.jpg",
    "https://i.imgur.com/lnHWPGe.jpg"
  ],
  srla:[
    "https://i.imgur.com/BNtZayu.jpg",
    "https://i.imgur.com/15ePVOI.jpg",
    "https://i.imgur.com/BCNcxMM.jpg",
    "https://i.imgur.com/2lZu5em.jpg",
    "https://i.imgur.com/Tcg9An7.jpg",
    "https://i.imgur.com/uovWjcF.jpg",
    "https://i.imgur.com/EcsYiJ7.jpg",
  ],
  avid:[
    "https://i.imgur.com/LrcVpJ5.jpg",
    "https://i.imgur.com/nTaGYC9.jpg"
  ],
  sci:[
    "https://i.imgur.com/N7C1XHD.jpg",
    "https://i.imgur.com/ihhvWd5.jpg",
    "https://i.imgur.com/k8ObFQd.jpg",
  ]
}
export const posts = [
  {
    title: "California Polytechnic State University",
    id: "cal-ploy",
    content: [
      {
        tag: "h2",
        id: "beacon",
        inner: "Beamforming Elevated Array for COsmic Neutrinos (BEACON)"
      },
      {
        tag: "slider",
        imgs: imgs.beacon
      },
      {
        tag: "h2",
        id: "folk",
        inner: "Imagen y Espíritu Ballet Folklórico de Cal Poly"
      },
      {
        tag: "slider",
        imgs: imgs.folk
      },
      {
        tag: "h2",
        id: "chess",
        inner: "Chess Club"
      },
      {
        tag: "slider",
        imgs: imgs.chess
      },
      {
        tag: "h2",
        id: "mexa",
        inner: "MEXA"
      },
      {
        tag: "slider",
        imgs: imgs.mexa
      },
    ]
  },
  {
    title: "Woodrow Wilson High School",
    id: "wilson",
    content: [
      {
        tag: "h2",
        id: "avid",
        inner: "AVID"
      },
      {
        tag: "slider",
        imgs: imgs.avid
      },
      {
        tag: "h2",
        id: "srla",
        inner: "Student Run Los Angeles"
      },
      {
        tag: "slider",
        imgs: imgs.srla
      },
      {
        tag: "h2",
        id: "science",
        inner: "Science Club"
      },
      {
        tag: "slider",
        imgs: imgs.sci
      },
    ]
  },
]
