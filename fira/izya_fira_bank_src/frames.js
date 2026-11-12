const {chromium}=require('playwright'); const fs=require('fs');
(async()=>{ const D=process.argv[2], mode=process.argv[3]; const times=process.argv.slice(4).map(Number);
 const b=await chromium.launch({args:['--allow-file-access-from-files']}); const p=await b.newPage({viewport:{width:1920,height:1080}});
 p.on('pageerror',e=>console.log('ERR',e.message));
 await p.addInitScript(`window.MOUTH_DATA=${fs.readFileSync(D+'/mouth.json','utf8')};`);
 await p.goto('file://'+D+'/compose.html'); await p.waitForFunction('window.READY',null,{timeout:60000});
 const list = mode==='all' ? Array.from({length:Math.round(19*25)},(_,i)=>i/25) : times;
 fs.mkdirSync(D+'/out',{recursive:true});
 for(let i=0;i<list.length;i++){ const url=await p.evaluate(t=>{window.render(t); return document.getElementById('c').toDataURL('image/jpeg',0.95);}, list[i]);
   fs.writeFileSync(`${D}/out/${mode==='all'?'f':'s'}_${String(i).padStart(4,'0')}.jpg`, Buffer.from(url.split(',')[1],'base64')); }
 await b.close(); console.log('кадров:', list.length); })();
