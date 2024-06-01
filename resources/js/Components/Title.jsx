export default function Title({children,className}) {
    return (
        <h1 className={`${className} w-full font-['Toyota_Type'] text-2xl border-b text-primary pb-4 mb-3 md:mb-6`}>{children}</h1>
    )
}