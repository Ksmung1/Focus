const collapseBar = document.querySelector('.collapse-bar');
const collapseBar2 = document.querySelector('.collapse-bar2');
const popupWindow = document.querySelector('.popup-window')
const divBody = document.querySelector('.body')
const NDAselector = document.querySelector('.NDA')
const CDSselector = document.querySelector('.CDS')

const CDS = 'this page is for CDS and only those who select CDS will see this.'
const NDA = 'this page is for NDA and only those who select NDA will see this.'




collapseBar.addEventListener('click', () => {
          popupWindow.classList.toggle('hidden')
});

collapseBar2.addEventListener('click', () => {
          popupWindow.classList.toggle('hidden')
});


NDAselector.addEventListener('click', () => {
          divBody.innerHTML = NDA
});


CDSselector.addEventListener('click', () => {
          divBody.innerHTML = CDS
});



