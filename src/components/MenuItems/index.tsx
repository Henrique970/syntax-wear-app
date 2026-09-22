export const MenuItems = () => {

    const menus = [
        { tittle: "Maculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
        { tittle: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
        { tittle: "Outlet", items: ["Masculino", "Feminino"] },
        { tittle: "Sobre", items: ["Quem Somos", "Missão"] }
    ]

    return (
        <div className=" flex flex-col md:flex-row gap-28">
            {menus.map(({ tittle, items }) => (
                <nav>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="text-surface-alt text-xl">{tittle}</p>
                        </li>
                        {items.map((item) => (
                            <li key={item}>
                                <a href="#" className="font-medium hover:text-[#cccccc] transition-colors text-xl">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    )
}