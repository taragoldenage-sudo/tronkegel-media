const {chromium}=require('playwright');
(async()=>{ const D=process.argv[2]; const names=process.argv.slice(3);
 const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 for(const n of names){ const p=await b.newPage({viewport:{width:1920,height:1080}});
  p.on('pageerror',e=>console.log(n,'ERR',e.message));
  const t=Date.now(); await p.goto('file://'+D+'/layers.html?layer='+n); await p.waitForFunction('window.DONE',null,{timeout:120000}); await p.waitForTimeout(300);
  await (await p.$('canvas')).screenshot({path:`${D}/layers/${n}.png`, omitBackground:true}); console.log(n, (Date.now()-t)/1000+'s'); await p.close(); }
 await b.close(); })();
