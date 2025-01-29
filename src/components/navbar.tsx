type link = {
    label: string,
    url: string
}

type navbarProps = {
    image: string;
    links: link[];
}

export function Navbar({ image, links}:navbarProps) {
    return (
        <nav className="flex justify-between text-lg text-amber-100 py-3 px-2 bg-blue-700">
            <img src={image} className="h-10" alt="logo" />
            <ul className="flex gap-16">
                {links.map((link, index) => (
                    <li className="bg-amber-300 hover:bg-amber-950 hover:text-amber-100 text-amber-950 py-1 px-4 rounded" key={index}> <a href= {link.url}>{link.label}</a></li>
                ))}
            </ul>
        </nav>
    )
}
