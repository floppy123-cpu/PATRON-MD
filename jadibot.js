const _0x28e34e=_0x4e68;function _0x4e68(_0x357eda,_0x2d6ad5){const _0x47d8a3=_0x47d8();return _0x4e68=function(_0x4e6835,_0x3e5d62){_0x4e6835=_0x4e6835-0x173;let _0xec38a7=_0x47d8a3[_0x4e6835];return _0xec38a7;},_0x4e68(_0x357eda,_0x2d6ad5);}(function(_0x263d1f,_0x1a160d){const _0x253915=_0x4e68,_0x5faf2c=_0x263d1f();while(!![]){try{const _0x7e7acc=-parseInt(_0x253915(0x1ee))/0x1*(parseInt(_0x253915(0x1c2))/0x2)+-parseInt(_0x253915(0x1d4))/0x3*(-parseInt(_0x253915(0x1a3))/0x4)+-parseInt(_0x253915(0x1aa))/0x5+-parseInt(_0x253915(0x1d7))/0x6+parseInt(_0x253915(0x1e4))/0x7+-parseInt(_0x253915(0x1ba))/0x8+-parseInt(_0x253915(0x1b5))/0x9*(-parseInt(_0x253915(0x18f))/0xa);if(_0x7e7acc===_0x1a160d)break;else _0x5faf2c['push'](_0x5faf2c['shift']());}catch(_0x214b30){_0x5faf2c['push'](_0x5faf2c['shift']());}}}(_0x47d8,0x6950a));const {modul}=require('./module'),{baileys,boom,chalk,fs,figlet,FileType,process,PhoneNumber}=modul,{Boom}=boom,path=require(_0x28e34e(0x19b)),{default:makeWaSocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,generateWAMessage,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,makeCacheableSignalKeyStore}=baileys,{color,bgcolor}=require(_0x28e34e(0x18e)),log=pino=require(_0x28e34e(0x178)),qrcode=require(_0x28e34e(0x1ae)),rimraf=require(_0x28e34e(0x1e7));let Pino=require(_0x28e34e(0x178));const {imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep,reSize}=require(_0x28e34e(0x1ab)),owner=JSON['parse'](fs[_0x28e34e(0x184)]('./database/owner.json')[_0x28e34e(0x189)]()),store=makeInMemoryStore({'logger':pino()[_0x28e34e(0x183)]({'level':'silent','stream':_0x28e34e(0x1e6)})});function _0x47d8(){const _0x3bc2c3=['msg','pino','s.whatsapp.net','server','content','logout','attrs','WhatsApp','sendMessage','mimetype','badSession','\x0a\x0aitem1.TEL;waid=','child','readFileSync','type','BAE5','silent','6289512545999@s.whatsapp.net','toString','10.15.7','loggedOut','map','subject','./lib/color','2780LCEBqL','CB:Blocklist','join','keys','@s.whatsapp.net','decodeJid','parseMention','call-creator','c.us','getNumber','connection.update','Connection\x20closed,\x20reconnecting....','path','output','replace','\x20Kontak','match','status','bind','conns','76gnMZVT','user','downloadAndSaveMediaMessage','length','international','blocklist','Restart\x20Required,\x20Restarting...','3828770EclpFT','./lib/myfunc','offer','endsWith','qrcode','ephemeralMessage','groupMetadata','connectionClosed','fatal','connectionReplaced','Connecting\x20to\x20Patron..','63585EJXUFK','concat','contacts','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','log','1688760MpEdhr','block','query','key','./XeonCheems8.js','registered','getName','writeFileSync','10hsjIXJ','fromBuffer','public','Connection\x20TimedOut,\x20Reconnecting...','message','open','Unknown\x20DisconnectReason:\x20','set','node-cache','close','creds.update','\x0a\x0aFN:','red','verifiedName','statusCode','exports','1234483@s.whatsapp.net','from','10689vJmyuc','Safari','BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:','1379922AjUrqI','CB:call','ext','Automatic\x20Block\x20System!!!\x0aDon\x27t\x20Call\x20Bots!!!\x0aPlease\x20Contact\x20Owner\x20to\x20Open!!!','reply','contacts.update','requestPairingCode','sendContact','downloadMediaMessage','push','messages.upsert','restartRequired','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','2325498agRUXw','setStatus','store','rimraf','0@s.whatsapp.net','connecting','codepairing','creds','split','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','145155ONJSPJ','utf-8','timedOut','end','mtype','./index'];_0x47d8=function(){return _0x3bc2c3;};return _0x47d8();}let NodeCache=require(_0x28e34e(0x1ca)),msgRetryCounterCache=new NodeCache();if(global[_0x28e34e(0x1a2)]instanceof Array)console[_0x28e34e(0x1b9)]();else global[_0x28e34e(0x1a2)]=[];const jadibot=async(_0x907d32,_0x34d77f,_0x2dff86)=>{const _0x47c592=_0x28e34e,{sendImage:_0x5b82e2,sendMessage:_0x36b5bf}=_0x907d32,{reply:_0x332d84,sender:_0x2efc89}=_0x2dff86,{state:_0x2ec39f,saveCreds:_0x1c46a0}=await useMultiFileAuthState(path['join'](__dirname,'./database/rentbot/'+_0x2efc89),log({'level':_0x47c592(0x187)}));try{async function _0x44c696(){const _0x336c27=_0x47c592;let {version:_0x1c7db9,isLatest:_0x199525}=await fetchLatestBaileysVersion();const _0x446948={'logger':Pino({'level':_0x336c27(0x1b2)})['child']({'level':'fatal'}),'printQRInTerminal':![],'mobile':![],'auth':{'creds':_0x2ec39f['creds'],'keys':makeCacheableSignalKeyStore(_0x2ec39f['keys'],Pino({'level':_0x336c27(0x1b2)})[_0x336c27(0x183)]({'level':_0x336c27(0x1b2)}))},'browser':['Mac\x20OS',_0x336c27(0x1d5),_0x336c27(0x18a)],'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'msgRetryCounterCache':msgRetryCounterCache,'defaultQueryTimeoutMs':undefined};let _0x6cad9=require(_0x336c27(0x176));!_0x907d32['authState'][_0x336c27(0x1eb)][_0x336c27(0x1bf)]&&setTimeout(async()=>{const _0xd5a379=_0x336c27;let _0x3cdbc8=''+_0x34d77f;console[_0xd5a379(0x1b9)](chalk[_0xd5a379(0x1ce)]['bold']('[\x20Jadibot\x20]\x20->\x20(+'+_0x3cdbc8+')'));let _0xbb612c=await _0x907d32[_0xd5a379(0x1dd)](_0x3cdbc8),_0x24919b=_0xbb612c?.[_0xd5a379(0x19f)](/.{1,4}/g)?.[_0xd5a379(0x191)]('-')||_0xbb612c;global[_0xd5a379(0x1ea)]=''+_0x24919b;},0xbb8),_0x907d32['ws']['on'](_0x336c27(0x190),_0x2ef0ec=>{const _0xb8a2f3=_0x336c27;if(blocked[_0xb8a2f3(0x1a6)]>0x2)return;for(let _0x55b4e4 of _0x2ef0ec[0x1][_0xb8a2f3(0x1a8)]){blocked['push'](_0x55b4e4['replace'](_0xb8a2f3(0x197),_0xb8a2f3(0x179)));}}),_0x907d32['ws']['on'](_0x336c27(0x1d8),async _0x504fe2=>{const _0x2b2640=_0x336c27,_0x4b5bcb=_0x504fe2[_0x2b2640(0x17b)][0x0]['attrs'][_0x2b2640(0x196)],_0x15dc37=_0x504fe2['content'][0x0][_0x2b2640(0x17d)]['call-id'],_0x504118=_0x504fe2[_0x2b2640(0x17d)]['id'],_0x9fdc68=_0x504fe2['attrs']['t'];_0x907d32['sendNode']({'tag':'call','attrs':{'from':_0x2b2640(0x188),'id':_0x504118,'t':_0x9fdc68},'content':[{'tag':'reject','attrs':{'call-creator':_0x4b5bcb,'call-id':_0x15dc37,'count':'0'},'content':null}]});if(_0x504fe2[_0x2b2640(0x17b)][0x0]['tag']==_0x2b2640(0x1ac)){let _0x48ad43=await _0x907d32[_0x2b2640(0x1de)](_0x4b5bcb,owner);await _0x907d32[_0x2b2640(0x17f)](_0x4b5bcb,{'text':_0x2b2640(0x1da)},{'quoted':_0x48ad43}),await sleep(0x1f40),await _0x907d32['updateBlockStatus'](_0x4b5bcb,_0x2b2640(0x1bb));}}),_0x907d32['ev']['on'](_0x336c27(0x1e1),async _0x140b07=>{const _0x18aeb5=_0x336c27;try{kay=_0x140b07['messages'][0x0];if(!kay['message'])return;kay[_0x18aeb5(0x1c6)]=Object[_0x18aeb5(0x192)](kay[_0x18aeb5(0x1c6)])[0x0]===_0x18aeb5(0x1af)?kay['message'][_0x18aeb5(0x1af)][_0x18aeb5(0x1c6)]:kay[_0x18aeb5(0x1c6)];if(kay[_0x18aeb5(0x1bd)]&&kay[_0x18aeb5(0x1bd)]['remoteJid']==='status@broadcast')return;if(!_0x907d32['public']&&!kay[_0x18aeb5(0x1bd)]['fromMe']&&_0x140b07[_0x18aeb5(0x185)]==='notify')return;if(kay[_0x18aeb5(0x1bd)]['id']['startsWith'](_0x18aeb5(0x186))&&kay['key']['id'][_0x18aeb5(0x1a6)]===0x10)return;_0x2dff86=smsg(_0x907d32,kay,store),require(_0x18aeb5(0x1be))(_0x907d32,_0x2dff86,_0x140b07,store);}catch(_0x38f948){console['log'](_0x38f948);}}),_0x907d32[_0x336c27(0x1c4)]=!![],store[_0x336c27(0x1a1)](_0x907d32['ev']),_0x907d32['ev']['on'](_0x336c27(0x1cc),_0x1c46a0),_0x907d32['ev']['on'](_0x336c27(0x199),async _0x18ee7e=>{const _0x2a89df=_0x336c27,{lastDisconnect:_0x7aa6c3,connection:_0x19c218}=_0x18ee7e;if(_0x19c218==_0x2a89df(0x1e9))return;if(_0x19c218){if(_0x19c218!=_0x2a89df(0x1e9))console[_0x2a89df(0x1b9)](_0x2a89df(0x1b4));}_0x19c218==_0x2a89df(0x1c7)&&(_0x907d32['id']=_0x907d32[_0x2a89df(0x194)](_0x907d32['user']['id']),_0x907d32['time']=Date['now'](),global[_0x2a89df(0x1a2)][_0x2a89df(0x1e0)](_0x907d32),await _0x2dff86[_0x2a89df(0x1db)]('*Connected\x20to\x20Whatsapp\x20-\x20Bot*\x0a\x0a*User\x20:*\x0a\x20_*×\x20id\x20:\x20'+_0x907d32['decodeJid'](_0x907d32['user']['id'])+'*_'),user=''+_0x907d32[_0x2a89df(0x194)](_0x907d32[_0x2a89df(0x1a4)]['id']),txt='*Terdeteksi\x20menumpang\x20Jadibot*\x0a\x0a\x20_\x20User\x20:\x20@'+user[_0x2a89df(0x1ec)]('@')[0x0]+'_',_0x36b5bf(_0x2a89df(0x1d2),{'text':txt,'mentions':[user]}));if(_0x19c218===_0x2a89df(0x1cb)){let _0x39f0ba=new Boom(_0x7aa6c3?.['error'])?.[_0x2a89df(0x19c)][_0x2a89df(0x1d0)];if(_0x39f0ba===DisconnectReason[_0x2a89df(0x181)])console['log'](_0x2a89df(0x1b8)),_0x907d32[_0x2a89df(0x17c)]();else{if(_0x39f0ba===DisconnectReason[_0x2a89df(0x1b1)])console[_0x2a89df(0x1b9)](_0x2a89df(0x19a)),_0x44c696();else{if(_0x39f0ba===DisconnectReason['connectionLost'])console[_0x2a89df(0x1b9)](_0x2a89df(0x1e3)),_0x44c696();else{if(_0x39f0ba===DisconnectReason[_0x2a89df(0x1b3)])console['log'](_0x2a89df(0x1ed)),_0x907d32['logout']();else{if(_0x39f0ba===DisconnectReason[_0x2a89df(0x18b)])console['log']('NanoBotzce\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),_0x907d32[_0x2a89df(0x17c)]();else{if(_0x39f0ba===DisconnectReason[_0x2a89df(0x1e2)])console[_0x2a89df(0x1b9)](_0x2a89df(0x1a9)),_0x44c696();else{if(_0x39f0ba===DisconnectReason[_0x2a89df(0x173)])console[_0x2a89df(0x1b9)](_0x2a89df(0x1c5)),_0x44c696();else _0x907d32[_0x2a89df(0x174)](_0x2a89df(0x1c8)+_0x39f0ba+'|'+_0x19c218);}}}}}}}}),_0x907d32['decodeJid']=_0x4277f6=>{const _0x4d9a0c=_0x336c27;if(!_0x4277f6)return _0x4277f6;if(/:\d+@/gi['test'](_0x4277f6)){let _0x5595b7=jidDecode(_0x4277f6)||{};return _0x5595b7[_0x4d9a0c(0x1a4)]&&_0x5595b7['server']&&_0x5595b7[_0x4d9a0c(0x1a4)]+'@'+_0x5595b7[_0x4d9a0c(0x17a)]||_0x4277f6;}else return _0x4277f6;},_0x907d32['ev']['on'](_0x336c27(0x1dc),_0x5f1b56=>{const _0x189465=_0x336c27;for(let _0x51faec of _0x5f1b56){let _0x25eb24=_0x907d32[_0x189465(0x194)](_0x51faec['id']);if(store&&store[_0x189465(0x1b7)])store[_0x189465(0x1b7)][_0x25eb24]={'id':_0x25eb24,'name':_0x51faec['notify']};}}),_0x907d32[_0x336c27(0x1c0)]=(_0x28e1f3,_0x3153db=![])=>{const _0x9c98be=_0x336c27;id=_0x907d32[_0x9c98be(0x194)](_0x28e1f3),_0x3153db=_0x907d32['withoutContact']||_0x3153db;let _0x5377d6;if(id[_0x9c98be(0x1ad)]('@g.us'))return new Promise(async _0x45f6ac=>{const _0x6cd77c=_0x9c98be;_0x5377d6=store['contacts'][id]||{};if(!(_0x5377d6['name']||_0x5377d6[_0x6cd77c(0x18d)]))_0x5377d6=_0x907d32[_0x6cd77c(0x1b0)](id)||{};_0x45f6ac(_0x5377d6['name']||_0x5377d6[_0x6cd77c(0x18d)]||PhoneNumber('+'+id['replace'](_0x6cd77c(0x193),''))[_0x6cd77c(0x198)](_0x6cd77c(0x1a7)));});else _0x5377d6=id===_0x9c98be(0x1e8)?{'id':id,'name':_0x9c98be(0x17e)}:id===_0x907d32[_0x9c98be(0x194)](_0x907d32[_0x9c98be(0x1a4)]['id'])?_0x907d32[_0x9c98be(0x1a4)]:store[_0x9c98be(0x1b7)][id]||{};return(_0x3153db?'':_0x5377d6['name'])||_0x5377d6[_0x9c98be(0x18d)]||_0x5377d6[_0x9c98be(0x1cf)]||PhoneNumber('+'+_0x28e1f3[_0x9c98be(0x19d)](_0x9c98be(0x193),''))[_0x9c98be(0x198)](_0x9c98be(0x1a7));},_0x907d32[_0x336c27(0x195)]=(_0x25234c='')=>{const _0x5b546c=_0x336c27;return[..._0x25234c['matchAll'](/@([0-9]{5,16}|0)/g)][_0x5b546c(0x18c)](_0x2896c4=>_0x2896c4[0x1]+_0x5b546c(0x193));},_0x907d32[_0x336c27(0x1de)]=async(_0x3da601,_0x1fe2ff,_0x4b1860='',_0xf6ac50={})=>{const _0x5afbca=_0x336c27;let _0x4791a9=[];for(let _0x7131cd of _0x1fe2ff){_0x4791a9[_0x5afbca(0x1e0)]({'displayName':await _0x907d32[_0x5afbca(0x1c0)](_0x7131cd+'@s.whatsapp.net'),'vcard':_0x5afbca(0x1d6)+await _0x907d32[_0x5afbca(0x1c0)](_0x7131cd+_0x5afbca(0x193))+_0x5afbca(0x1cd)+await _0x907d32[_0x5afbca(0x1c0)](_0x7131cd+_0x5afbca(0x193))+_0x5afbca(0x182)+_0x7131cd+':'+_0x7131cd+'\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD'});}_0x907d32[_0x5afbca(0x17f)](_0x3da601,{'contacts':{'displayName':_0x4791a9['length']+_0x5afbca(0x19e),'contacts':_0x4791a9},..._0xf6ac50},{'quoted':_0x4b1860});},_0x907d32[_0x336c27(0x1e5)]=_0x490556=>{const _0x2d6f64=_0x336c27;return _0x907d32[_0x2d6f64(0x1bc)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x2d6f64(0x1c9),'xmlns':'status'},'content':[{'tag':_0x2d6f64(0x1a0),'attrs':{},'content':Buffer['from'](_0x490556,_0x2d6f64(0x1ef))}]}),_0x490556;},_0x907d32[_0x336c27(0x1a5)]=async(_0x1adfa7,_0x477642,_0x14464f=!![])=>{const _0x48c341=_0x336c27;let _0x53a734=_0x1adfa7['msg']?_0x1adfa7[_0x48c341(0x177)]:_0x1adfa7,_0x5d01cb=(_0x1adfa7[_0x48c341(0x177)]||_0x1adfa7)[_0x48c341(0x180)]||'',_0xb1c804=_0x1adfa7[_0x48c341(0x175)]?_0x1adfa7[_0x48c341(0x175)][_0x48c341(0x19d)](/Message/gi,''):_0x5d01cb[_0x48c341(0x1ec)]('/')[0x0];const _0x20680a=await downloadContentFromMessage(_0x53a734,_0xb1c804);let _0x3f0198=Buffer['from']([]);for await(const _0x2fb84a of _0x20680a){_0x3f0198=Buffer[_0x48c341(0x1b6)]([_0x3f0198,_0x2fb84a]);}let _0x23cb92=await FileType[_0x48c341(0x1c3)](_0x3f0198);return trueFileName=_0x14464f?_0x477642+'.'+_0x23cb92[_0x48c341(0x1d9)]:_0x477642,await fs[_0x48c341(0x1c1)](trueFileName,_0x3f0198),trueFileName;},_0x907d32[_0x336c27(0x1df)]=async _0x245e98=>{const _0x4f9c11=_0x336c27;let _0x933334=(_0x245e98[_0x4f9c11(0x177)]||_0x245e98)[_0x4f9c11(0x180)]||'',_0x431b73=_0x245e98[_0x4f9c11(0x175)]?_0x245e98['mtype'][_0x4f9c11(0x19d)](/Message/gi,''):_0x933334[_0x4f9c11(0x1ec)]('/')[0x0];const _0x90f276=await downloadContentFromMessage(_0x245e98,_0x431b73);let _0x5d913c=Buffer[_0x4f9c11(0x1d3)]([]);for await(const _0x5b6673 of _0x90f276){_0x5d913c=Buffer[_0x4f9c11(0x1b6)]([_0x5d913c,_0x5b6673]);}return _0x5d913c;},_0x907d32['sendText']=(_0x3a49e5,_0x46558d,_0x535ec3='',_0x1dd433)=>_0x907d32['sendMessage'](_0x3a49e5,{'text':_0x46558d,..._0x1dd433},{'quoted':_0x535ec3});}_0x44c696();}catch(_0x4172ab){console[_0x47c592(0x1b9)](_0x4172ab);}};module[_0x28e34e(0x1d1)]={'jadibot':jadibot,'conns':conns};