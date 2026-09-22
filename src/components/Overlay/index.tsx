interface OverlayProps {
    children: React.ReactNode;
    tittle: string;
    subtittle: string;
    ownClassName?: string
}

export const Overlay = ({ children, tittle, subtittle, ownClassName }: OverlayProps) => {
    return (
        <div className={`absolute w-full flex items-center text-center ${ownClassName}`}>

            <div className="flex flex-col  items-center text-white w-97">
                <h2 className="text-xl font-medium leading-normal tracking-wider mb-2">
                    {tittle}
                </h2>

                <h1 className="text-2xl leading-9 tracking-widest mb-10">
                    {subtittle}
                </h1>

                <div className="flex gap-3.5">
                    {children}
                </div>
            </div>

        </div>
    )
}