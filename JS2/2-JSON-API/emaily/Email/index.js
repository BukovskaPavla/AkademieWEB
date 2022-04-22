
export const Email = (props) => {
    
    const { sender, subject, time} = props

    
    return `
    <div class="email">
        <div class="email__icon email__icon--closed"></div>
        <div class="email__fill">
            <div class="email__sender-name">${sender.name}</div>
            <div class="email__subject">${subject}</div>
        </div>
        <div class="email__end">
            <div class="email__time">${time}</div>
        </div>
        </div>`
}