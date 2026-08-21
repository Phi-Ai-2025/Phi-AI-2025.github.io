// Bulleted list with the circled tick. Colour comes from the --tick custom
// property set by the accent-* class on an ancestor.
export default function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
