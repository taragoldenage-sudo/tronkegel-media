const {chromium}=require('playwright'); const path=require('path');
(async()=>{ const D=process.argv[2], out=process.argv[3], n=+process.argv[4]||1;
 const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']}); const p=await b.newPage({viewport:{width:720,height:900}});
 p.on('pageerror',e=>console.log('ERR',e.message)); p.on('console',m=>{if(m.type()==='error')console.log('CONSOLE',m.text())});
 for(let i=0;i<n;i++){ const t=n==1?0.5:i/n; await p.goto('file://'+D+'/index.html?t='+t); await p.waitForFunction('window.DONE',null,{timeout:60000}); await p.waitForTimeout(300);
  await (await p.$('canvas')).screenshot({path:`${out}_${String(i).padStart(3,'0')}.png`}); }
 await b.close(); })();
