window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 450) nav.className = ''; else nav.className = 'scroll';
};