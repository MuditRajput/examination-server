export default function diamond(columns){
    let s="";
    let diamond="";
    for(let i=1; i<=columns*2; i++){
        if(i<=columns){
            s="  "
            for(let j=columns;j>=i;j--){
                s=s+"  ";
            }   
            for(let k=1;k<=i; k++){
                s=s+" *  "
            }
            diamond+="\n"+s;
        } 
        else{
            s="";
            for(let j=columns;j<=i;j++){
                s=s+"  ";
            }
        
            for(let k=columns*2;k>=i; k--){
                s=s+" *  "
            }
            diamond+="\n"+s;
        }
        s="";
    }
console.log(`The diamond of ${columns} columns: \n ${diamond} \n`);
}
