# DiaToPdf
nodejs utility to generate pdf figure from dia figure embedding latex<br/>
This script is written in javascript but may be easily translated to any other scripting language.<br/>
<br/>
Let's consider that your dia drawing file is file.dia, the script will run the three following commands
 * "C:\Program Files (x86)\Dia\bin\dia.exe" --nosplash --export=file.mp file.dia
 * mpost --tex=latex file
 * pdftex -undump=mptopdf \relax file.1
 <br/>
The script will end with a cleanup processing that will delete intermediate files.
