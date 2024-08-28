interface SectionProps{
    children: React.ReactNode,
}

export const Section = function({ children }: SectionProps){
    return(
        <section className="section">
            {children}
        </section>
    )
}