import Header from '@comp/layout/header'
import Footer from '@comp/layout/footer'
import { IPlainObject } from '@def/IPlainObject'

const Layout: React.FC<IPlainObject> = ({ children, name }) => {
  const sumar = (a: number, b: number): number => {
    return a + b
  }

  sumar(20, 50)
  return (
    <div>
      <Header />
      {name}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
