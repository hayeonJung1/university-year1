
        function init(){
            let img = document.getElementById("img");
            let p = document.getElementById("p");
        }
        function over1(){
            img.src="이미지2.jpg";
        }
        function out1(){
            img.src="이미지1.jpg";
        }
        function over2(){
            p.style.backgroundColor="yellow";
            p.innerHTML="퐁냥퐁냥 인절미";
            p.style.color="gray";
        }
        function out2(){
            p.style.backgroundColor="pink";
            p.innerHTML="보들보들 리트리버";
            p.style.color="gray";
        }
        //파라미터가 있을 경우
        function over3(a){
            //let p = document.getElementById("p");
            a.style.backgroundColor="red";
        }
        function out3(a){
            //let p = document.getElementById("p");
            a.style.backgroundColor="blue";
        }
