const Container = ({className, children, ...props}:{className?:string; children: React.ReactNode}) => {
  return (
    <div className={`container mx-auto ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container