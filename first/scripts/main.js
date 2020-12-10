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
      
    let myImage=document.querySelector('img');
    
    myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images2/firefox-icon.png') {
      myImage.setAttribute ('src','images2/firefox2.png');
    } else {
      myImage.setAttribute ('src','images2/firefox-icon.png');
    }
}
