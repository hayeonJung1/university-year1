//const
function myTest(){
    if(true){
        //const x=100;
        let x=100;
        x=200;
        document.write(x);
    }
    //시험문제 : 오류의 원인은? -> const인데 변경했기 때문에
}
myTest();