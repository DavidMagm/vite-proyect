function NavContainer({children}) {
    return(
        <ul className="flex items-center gap-3">
            {children}
        </ul>
    )
}

export {NavContainer};