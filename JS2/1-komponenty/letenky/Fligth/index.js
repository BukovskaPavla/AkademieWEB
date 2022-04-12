export const Flight = (props) => {
    const { cityFrom, cityTo, timeFrom, timeTo } = props
      
    return( `
    <div class="flight">
    <div class="flight__icon"></div>
    <div class="flight__info">
      <div class="flight__stop">
        <p class="flight__stop-type">Odlet:</p>
        <p class="flight__stop-city">${cityFrom}</p>
        <p class="flight__stop-time">${timeFrom}</p>
      </div>
      <div class="flight__stop">
        <p class="flight__stop-type">Přílet:</p>
        <p class="flight__stop-city">${cityTo}</p>
        <p class="flight__stop-time">${timeTo}</p>
      </div>
    </div>
  </div>
    `)
  };