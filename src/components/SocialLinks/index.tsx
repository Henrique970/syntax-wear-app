import iconInstagram from "@/assets/images/icons/icon-instagram.png"
import iconTiktok from "@/assets/images/icons/icon-tiktok.png"
import iconWhatsApp from "@/assets/images/icons/icon-whatsapp.png"
import iconFacebook from "@/assets/images/icons/icon-facebook.png"

export const SocialLinks = () => {
    const socialLinks = [
        { href: "#", icon: iconInstagram, name: "Instagram" },
        { href: "#", icon: iconTiktok, name: "Tiktok" },
        { href: "#", icon: iconWhatsApp, name: "WhatsApp" },
        { href: "#", icon: iconFacebook, name: "WhatsApp" }
    ]

    return (
        <>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}