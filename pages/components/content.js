export default function Content({ children }) {
  return (
    <div>
      <div className="container">
        { children }
      </div>
      <hr />
      <footer>©こぴーらいと</footer>
    </div>
  )
}