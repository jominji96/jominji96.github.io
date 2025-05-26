 const $input = document.querySelector("#text");
  const $i = document.querySelector("#i");
  const $i2 = document.querySelector("#i2");
  const $word = document.querySelector("#word");
  const $user = document.querySelector("#user");
  const $list = document.querySelector("#list");
  


//li만들기
const appendChild = (keyword) => {
  const $li = document.createElement("li");  
  $li.classList.add("enter");
  $li.textContent = keyword;
  $list.appendChild($li);
  if( $list.children.length > 7 ){
    const $first = $list.children[0];
    $list.removeChild($first);
  }
};

  const moveinput= ()=>{
    const elem = document.querySelector("#start").value;
    if(elem !== ""){
    //   const elemlist = document.createElement("li");
    //   elemlist.textContent = elem;
    //   $list.appendChild(elemlist);
        appendChild(elem);
        // changePcontent(elem);
        //
        const $view = document.querySelector("#main");
        $view.style.display = "none";
        const $start = document.querySelector("#main2");
        $start.style.display = "block";
      } else{
        alert("단어를 입력하세요");
        return;
      }
    };
  
$i.addEventListener("click",moveinput );

//   const input2= ()=>{
//       const elem = document.querySelector("#text").value;
//       if(elem !== ''){
//         const elemlist = document.createElement("li");
//         elemlist.textContent = elem;
//         $list.appendChild(elemlist);
//       }
//     }

    const ox= ()=>{
      const keyword = $input.value.trim();
      if(keyword === ""){
        alert("단어를 입력하세요");
        return
      }
      const last = $list.lastElementChild.textContent;
      const lastword = last[last.length -1];
      const firstword = keyword[0];
      if(lastword === firstword){
        // changePcontent(keyword);
        // const elem = document.createElement("li");
        // elem.textContent = keyword;
        // $list.appendChild(elem);
          appendChild(keyword);
      } else{
        alert(`X. ${lastword} 로 시작해야 합니다`);
      } 
    $input.value = "";
    $input.focus();
    }



  //클릭 이벤트
  $i2.addEventListener("click",ox);
  $input.addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
      ox();
    }
  });
//   //클릭 이벤트
//     $i2.addEventListener("click",input2);
//     $input2.addEventListener("keydown",(event)=>{
//       if(event.key === "Enter"){
//         $i2.input2();
//       }
    // });