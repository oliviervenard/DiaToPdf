var ChildProcess=require('child_process');
var fs=require('fs')

var Name=process.argv[2]
if(Name==undefined)
{
    console.log('Usage: node myMptoPdf fileName')
    process.exit(1)
}
diaCmd='"C:\\Program Files (x86)\\Dia\\bin\\dia.exe"'
cmd=diaCmd+' --nosplash --export='+Name+'.mp '+Name+'.dia'
console.log('Run :  '+cmd)
ChildProcess.execSync(cmd)
cmd='mpost --tex=latex '+Name
console.log('Run :  '+cmd)
ChildProcess.execSync(cmd)
cmd='pdftex -undump=mptopdf \\relax '+Name+'.1'
console.log('Run :  '+cmd)
ChildProcess.execSync(cmd)
var fileList=[Name+'.mp',Name+'.mpx',Name+'.log',Name+'.1']
fileList.forEach(function(elt){
    fs.unlink(elt,function(err){
        if(err) return console.log(err)
    })
})
