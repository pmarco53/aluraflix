import { Link } from 'react-router-dom'

function CabecalhoLink({ url, children, name }) {
  return (
    <Link to={url} className={name}>
      {children}
    </Link>
  )
}

export default CabecalhoLink
