import '../style.css'
export const Quotes = (props) => {
    const  { text, author } = props
 return `<h1>Citát pro dnešní den</h1>
 <p>${text}</p>
 <p>${author}</p>`
}