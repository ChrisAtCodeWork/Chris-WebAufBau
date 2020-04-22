window.onload = () => {
  const bannerEle = document.getElementById('bg-container');
  const styleElement = document.body.appendChild( document.createElement('style'));
  const backgrounds = 5;
  let currentBG = 0;
  setInterval(() => {
    currentBG = currentBG < backgrounds ? ++currentBG : 0;
    bannerEle.classList.remove('fadeIn');
    void bannerEle.offsetWidth;
    bannerEle.classList.add('fadeOut');
    setTimeout(() => {
      bannerEle.classList.remove('fadeOut');
      void bannerEle.offsetWidth;
      bannerEle.classList.add('fadeIn');
      styleElement.innerText = `#banner>#bg-container {
        background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/Chris-WebAufBau/images/banner${currentBG}.jpg");
        background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/Chris-WebAufBau/images/banner${currentBG}.jpg");
        background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/Chris-WebAufBau/images/banner${currentBG}.jpg");
        background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/Chris-WebAufBau/images/banner${currentBG}.jpg");
        }`;
      
    }, 1600)
  }, 7000);
}
