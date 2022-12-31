import Link from "next/link"
import Icon from '../ui/icons'

const SocialMedia = () => {
  const iconSize = "3.33rem"
  return (
    <>
      <div className="social-icon">
        <Link href="https://www.facebook.com/">
          <Icon icon="mdi:facebook" size={iconSize} />
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://www.instagram.com/">
          <Icon icon="mdi:instagram" size={iconSize} />
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://github.com/microdotmatrix">
          <Icon icon="mdi:github" size={iconSize} />
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://www.linkedin.com/in/therealjohnpolinski/">
          <Icon icon="mdi:linkedin" size={iconSize} />
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://codepen.io/mrselfdestruct">
          <Icon icon="mdi:codepen" size={iconSize} />
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://twitch.tv/microdotmatrix">
          <Icon icon="mdi:twitch" size={iconSize} />
        </Link>
      </div>
    </>
  )
}

export default SocialMedia
