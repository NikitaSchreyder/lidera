import Link from "next/link"

const HomeNotice: React.FC = () => {
  const noticeText = 'If your happy place is at the dinner table, we totally get that. That’s why we created products to help you find slow moments in a fast world.'

  return (
    <div className="notice">
      <p className="notice-text">{noticeText}</p>
      <div className="notice-links">
        <Link href={'#'} className="notice-links_link">Shop All &#8594;</Link>
        <Link href={'#'} className="notice-links_link">Read Stories &#8594;</Link>
      </div>
    </div>
  )
}

export default HomeNotice