// s c r i p t  o r i  b y  aldi lesmanað­

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
})
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â NO OWNER â ââ´â´â´â´â¾â´â³ â«¹â«º

global.owner = [
['6281232813734', 'ðð¼ðð-ðð·', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6285694070559'
global.nomorown = '6285694070559'
global.nomorown1 = '6285694070559'
global.nomorown2 = '6285694070559'//bisa nama pacarmu
global.nomorown3 = '6285694070559' //ganti 
global.nomorwa = '0'//gakusah di ganti


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â WM â ââ´â´â´â´â¾â´â³ â«¹â«º

global.readMore = readMore
global.author = 'Created By IlhamModsTzy-Dev'
global.namebot = 'á´¹á´¿á­ IlhamModsTzy ÃáÖÍÃ-ðð·'
global.wm = 'Â© IlhamMods-ðð· | IlhamMdos'
global.media = 'https://ibb.co/pWNSSh6'
global.watermark = wm
global.wm2 = 'ðð¼ðð-ðð· '
global.wm3 = 'ðð¼ðð-ðð·'
global.botdate = `â«¹â«º DATE: ${week} ${date}\nâ«¹â«º ð§ð¶ðºð²: ${wktuwib}`
global.packname = wm
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `IlhamModsTzy ÃáÖÍÃ`
global.stickpack = 'IlhamModsTzy ÃáÖÍÃ'
global.gcname = 'IlhamModsTzy ÃáÖÍÃ'
global.nameown1= 'IlhamModsTzy ÃáÖÍÃ'
global.nameown2 = 'IlhamModsTzy ÃáÖÍÃ'
global.nameown3 = 'IlhamModsTzy ÃáÖÍÃ'
global.packname2 = 'IlhamModsTzy ÃáÖÍÃ'
global.stickauth = `Â© IlhamModsTzy ÃáÖÍÃ-ðð·`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â OWNER INFO â ââ´â´â´â´â¾â´â³ â«¹â«º
global.nameown = 'IlhamModsTzy ÃáÖÍÃ-ðð·'
global.ultahowner = '11 MEI 2023'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â MEDIA LINK â ââ´â´â´â´â¾â´â³ â«¹â«º
global.sgc = 'https://chat.whatsapp.com/BS98zcOPayX1YNqmIzQ4qA' //group whatsapp
global.lynk = 'https://ilhammodstzy.blogspot.com'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â MEDIA SOSSIAL â ââ´â´â´â´â¾â´â³ â«¹â«º
global.sig = 'https://www.instagram.com/ilhamsadboy_tzy/'
global.sgh = 'https://github.com/IlhamModsTzy' //github
global.wame = 'wa.me/6285694070559'
global.linkyt = 'https://youtube.com/@syahmozzofficialid8977'
global.tautanwa = 'wa.me/6285694070559' //kalau bisa link wa bisnis kalian
global.sfb = 'https://www.facebook.com/milhamn.ilham.71/' // facebook
global.sdc = '-' //discord
global.gcwangsaf = 'https://chat.whatsapp.com/BS98zcOPayX1YNqmIzQ4qA'
global.fakeyt = 'https://youtube.com/@syahmozzofficialid8977'
global.snh = 'https://youtube.com/@syahmozzofficialid8977'
global.syt = 'https://youtube.com/@syahmozzofficialid8977'
global.tik = 'https://www.tiktok.com/'

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â DONASI â ââ´â´â´â´â¾â´â³ â«¹â«º
global.pdana = 'chat owner kak'
global.povo = 'chat owner kak'
global.plinkaja = 'chat owner kak' //link aja
global.pgopay = 'chat owner kK'
global.ppulsa = 'chat owner kak'
global.ppulsa2 = 'chat owner kak'
global.psaweria = 'https://saweria.co/hyuura'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â TAMPILAN â ââ´â´â´â´â¾â´â³ â«¹â«º
global.ListHargaSewa = 'â 5 Hari IDR 3.000\nâ 7 Hari IDR 5.000\nâ 15+5 Hari IDR 10.000\nâ 30 Hari IDR 15.000'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â TAMPILAN â ââ´â´â´â´â¾â´â³ â«¹â«º
global.LyAtas1 = 'â° âââ â¨'
global.LyAtas2 = 'â© ââââ â¢â'
global.Ly = 'â'
global.lybwh = 'âââââ â³»â³»'
global.sym = 'ââ»'
global.sym2 = 'â­'
global.dmenut = 'à¬ââââââ©' //top
global.dmenub = 'ââ¬' //body
global.dmenub2 = 'â' //body for info cmd on Default menu
global.dmenuf = 'ââââââââââââ¦' //footer
global.dashmenu = 'âââââ *DASHBOARD* âââââ'
global.cmenut = 'âââââââã' //top
global.cmenuh = 'ãââââââ' //header
global.cmenub = 'ââ¦ ' //body
global.cmenuf = 'ââââââââââââà¹\n' //footer
global.cmenua = '\nâ ââââââââââââââââââââââââââââââââ â\n     '
global.pmenus = 'â¦'
global.htki = 'ââââââã' // Hiasan Titile (KIRI)
global.htka = 'ãââââââ' // Hiasan Title  (KANAN)
global.lopr = 'â' //LOGO PREMIUM ON MENU.JS
global.lolm = 'â' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = 'â«¹â«º'    //hiasan Doang :v
global.hsquere = ['â¶','â','â«¹â«º']

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RESPOND â ââ´â´â´â´â¾â´â³ â«¹â«º
global.stiker_wait = 'â°â°â°â°â°â°â±â± 98% ð ððð!!'
global.wait = 'â°â°â°â°â°â°â±â± 98% ð ððð!!'
global.md = '_In progress, please wait..._'
global.eror = 'Mohon Maaf Server Kami Sedang Error!'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RESPOND GEME â ââ´â´â´â´â¾â´â³ â«¹â«º
global.benar = 'ð¶ððð ð¹ððð! ââ¡â'
global.salah = 'ð½ðð ð±ðð! ââ â'
global.dikit = "ð³ðððð ð»ððð,ðððððððð!!"


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RPG GAME â ââ´â´â´â´â¾â´â³ â«¹â«º
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: 'ð¤¸ââï¸',
      arc: 'ð¹',
      armor: 'ð¥¼',
      bank: 'ð¦',
      bibitanggur: 'ð',
      bibitapel: 'ð',
      bibitjeruk: 'ð',
      bibitmangga: 'ð¥­',
      bibitpisang: 'ð',
      bow: 'ð¹',
      bull: 'ð',
      cat: 'ð',
      chicken: 'ð',
      common: 'ð¦',
      cow: 'ð',
      crystal: 'ð®',
      darkcrystal: 'â ï¸',
      diamond: 'ð',
      dog: 'ð',
      dragon: 'ð',
      elephant: 'ð',
      emerald: 'ð',
      exp: 'âï¸',
      fishingrod: 'ð£',
      fox: 'ð¦',
      gems: 'ð',
      giraffe: 'ð¦',
      gold: 'ð',
      health: 'â¤ï¸',
      horse: 'ð',
      intelligence: 'ð§ ',
      iron: 'âï¸',
      keygold: 'ð',
      keyiron: 'ðï¸',
      knife: 'ðª',
      legendary: 'ðï¸',
      level: 'ð§¬',
      limit: 'ð',
      lion: 'ð¦',
      magicwand: 'âï¸',
      mana: 'ðª',
      money: 'ðµ',
      mythic: 'ð³ï¸',
      pet: 'ð',
      petFood: 'ð',
      pickaxe: 'âï¸',
      pointxp: 'ð§',
      potion: 'ð¥¤',
      rock: 'ðª¨',
      snake: 'ð',
      stamina: 'â¡',
      strength: 'ð¦¹ââï¸',
      string: 'ð¸ï¸',
      superior: 'ð¼',
      sword: 'âï¸',
      tiger: 'ð',
      trash: 'ð',
      uncommon: 'ð',
      upgrader: 'ð§°',
      wood: 'ðªµ'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â WEBSITE APIKEY â ââ´â´â´â´â¾â´â³ â«¹â«º
global.zenzkey = 'b8040941f7'
global.lolkey = '8e66d0934cf741bfd2182c16' // PUNYA WAHID
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zeks: 'https://api.zeks.me',
  zenz: 'https://api.zahwazein.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  btchx: 'https://api.botcahx.biz.id',
  pasha : 'https://api.nataganz.com',
  popcat: 'https://api.popcat.xyz',
  saipul: 'https://api.saipulanuar.my.id',
  ibeng: 'https://api.ibeng.tech'
}

//â³¹ NOTE !! EXAMPLE â¢ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zahwazein.xyz/': '85345ee3d9de',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api-fgmods.ddns.net': '6sotNhAL',
  'https://api.saipulanuar.my.id': '9vxw5GqJ',
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://api.neoxr.my.id': '5VC9rvNx',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': 'LuOlangNgentot',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha'
}
//â³¹ NOTE !! EXAMPLE â¢ 'https://WebsiteApi': 'Apikey'

// Apikey AI
global.openaikey = "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"

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â OTHER â ââ´â´â´â´â¾â´â³ â«¹â«º
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/da9f4b5973a80981079b9.jpg' //Main Thumbnail
global.thumbnail = 'https://telegra.ph/file/974d7f7ff054d5491ae82.jpg'
global.thumb2 = 'https://telegra.ph/file/d5795084974fa38d388ce.jpg'
global.imagebot = 'https://telegra.ph/file/da9f4b5973a80981079b9.jpg'
global.giflogo = VideoGalau()
global.thumbs = ['https://telegra.ph/file/da9f4b5973a80981079b9.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/e72de2cbba03f58eba7d1.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']

// pickRandom
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

//Galau
function VideoGalau() {
  let Galau = pickRandom([
"https://telegra.ph/file/c83205eeeecceb9e4db87.mp4",
"https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4",
"https://telegra.ph/file/a001c30cafa587a3bef2c.mp4",
"https://telegra.ph/file/09cf5ac786cbfda551617.mp4",
"https://telegra.ph/file/e696afd2cfe29a199be11.mp4",
"https://telegra.ph/file/5be5e3696c03edff2772b.mp4",
"https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
"https://telegra.ph/file/a33e23d6736f8cb40b4fb.mp4",
"https://telegra.ph/file/3426da3a67bdc0238bd46.mp4",
"https://telegra.ph/file/394386e5dff94ccff2323.mp4",
"https://telegra.ph/file/1a1cf22235249f0a459e5.mp4",
"https://telegra.ph/file/a5578746d1abf176894ed.mp4",
"https://telegra.ph/file/99dcebf89c97f13f4f657.mp4",
"https://telegra.ph/file/6a808e89640f23ecfc936.mp4",
"https://telegra.ph/file/2e35480077a5eae3b2a1e.mp4",
"https://telegra.ph/file/6c5ba9ed473f188a963b2.mp4",
])
  return Galau
}

global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.logo = 'https://i.pinimg.com/564x/f7/d2/e4/f7d2e48fd59a8c01cd396bfc70b0a2d1.jpg'
global.flaaa = fla
global.dtu = 'ÉªÉ´ê±á´á´É¢Êá´á´'
global.urlnya = "https://www.instagram.com/l4c1f2r"
global.dtc = 'á´á´ÊÊ á´á´¡É´á´Ê'
global.phn = '0812-3281-3734'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â JNGN DI UBAH â ââ´â´â´â´â¾â´â³ â«¹â«º

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})