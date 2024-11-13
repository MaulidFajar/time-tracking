const cardWrapper = document.querySelector('.card-wrapper');
const itemLink = document.querySelectorAll('.item');

let userData = [];

fetch('data.json')
.then((response) => {
  return response.json();
})
.then(data => {
  userData = data;
  let cards = ''
  userData.map(d => {
    cards += `
      <div class="card ${d.title.toLowerCase()}">
        <div class="card-type-name">
          <span>${d.title}</span>
          <img src="images/icon-ellipsis.svg">
        </div>
        <div class="card-info">
          <h3>${d.timeframes.weekly.current == 0 ? d.timeframes.weekly.current +`hr` : d.timeframes.weekly.current +`hrs`}</h3>
          <p>Last Week - ${d.timeframes.weekly.previous == 0 ? d.timeframes.weekly.previous +`hr` : d.timeframes.weekly.previous +`hrs`}</p>
        </div>
      </div>`
  });
  cardWrapper.innerHTML = cards;
})

itemLink.forEach(item => {
  item.addEventListener('click', () => {
    itemLink.forEach(button => button.classList.remove('active'));
    item.classList.add('active');

    if(item.id === 'daily') {
      updateDaily();
    } else if (item.id === 'weekly') {
      updateWeekly();
    } else if (item.id === 'monthly'){
      updateMonthly();
    }

  function updateDaily() {
    let cards = ''
      userData.map(d => {
        cards += `<div class="card ${d.title.toLowerCase()}">
        <div class="card-type-name">
          <span>${d.title}</span>
          <img src="images/icon-ellipsis.svg">
        </div>
        <div class="card-info">
          <h3>${d.timeframes.daily.current == 0 ? d.timeframes.daily.current +`hr` : d.timeframes.daily.current +`hrs`}</h3>
          <p>Last Day - ${d.timeframes.daily.previous == 0 ? d.timeframes.daily.previous +`hr` : d.timeframes.daily.previous +`hrs`}</p>
        </div>
      </div>`
      });
      cardWrapper.innerHTML = cards;
  }

    function updateWeekly() {
      let cards = ''
        userData.map(d => {
          cards += `<div class="card ${d.title.toLowerCase()}">
          <div class="card-type-name">
            <span>${d.title}</span>
            <img src="images/icon-ellipsis.svg">
          </div>
          <div class="card-info">
            <h3>${d.timeframes.weekly.current == 0 ? d.timeframes.weekly.current +`hr` : d.timeframes.weekly.current +`hrs`}</h3>
            <p>Last Week - ${d.timeframes.weekly.previous == 0 ? d.timeframes.weekly.previous +`hr` : d.timeframes.weekly.previous +`hrs`}</p>
          </div>
        </div>`
        });
        cardWrapper.innerHTML = cards;
    }

    function updateMonthly() {
      let cards = ''
        userData.map(d => {
          cards += `<div class="card ${d.title.toLowerCase()}">
          <div class="card-type-name">
            <span>${d.title}</span>
            <img src="images/icon-ellipsis.svg">
          </div>
          <div class="card-info">
            <h3>${d.timeframes.monthly.current == 0 ? d.timeframes.monthly.current +`hr` : d.timeframes.monthly.current +`hrs`}</h3>
            <p>Last Month - ${d.timeframes.monthly.previous == 0 ? d.timeframes.monthly.previous +`hr` : d.timeframes.monthly.previous +`hrs`}</p>
          </div>
        </div>`
        });
        cardWrapper.innerHTML = cards;
    }
  })
})




// function updateUIDaily(data) {
//   let cards = ''
//   data.forEach(d => {
//     cards += `  <div class="card ${d.title.toLowerCase()}">
//     <div class="card-type-name">
//       <span>${d.title}</span>
//       <img src="images/icon-ellipsis.svg">
//     </div>
//     <div class="card-info">
//       <h3>${d.timeframes.daily.current}hrs</h3>
//       <p>Last Daily - ${d.timeframes.daily.previous}hrs</p>
//     </div>
//   </div>`
//   });
//   cardWrapper.innerHTML = cards;
// }