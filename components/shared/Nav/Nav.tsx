const Nav = ({className, children,  ...props}:{
    className?:string;
    children:React.ReactNode
}) => {
  return (
    <nav className={`${className}`} {...props}>
      {children}
    </nav>
  )
}

export default Nav
