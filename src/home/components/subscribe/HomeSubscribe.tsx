const HomeSubscribe: React.FC = () => {
  const title = 'Sign up to our newsletter'
  const subtitle = 'Receive special offers and first look at new products.'

  return (
    <div className="subscribe">
      <p className="subscribe-title">{title}</p>
      <p className="subscribe-subtitle">{subtitle}</p>
      <form className="subscribe-form" action="#">
        <input className="subscribe-form_input--email" type="email" />
        <input className="subscribe-form_input--submit" type="submit" value='subscribe' />
      </form>
    </div>
  )
}

export default HomeSubscribe