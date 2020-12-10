      let myButton = document.querySelector('button');
      let myHeading = document.querySelector('h1');
     
      function setUserName() {
      let myName = prompt('あなたの名前を入力してください。');
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
      }
      myButton.onclick = function() {
      setUserName();
      }
      
    document.querySelector('html').onclick=function(){
      alert('痛っ！つつくのはやめて！');
      }
      
    let myImage=document.querySelector('img');
    
    myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images2/firefox-icon.png') {
      myImage.setAttribute ('src','images2/firefox2.png');
    } else {
      myImage.setAttribute ('src','images2/firefox-icon.png');
    }
}
