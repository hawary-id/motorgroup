export default function IncotermContent({title,subtitle}) {
    return (
        <div className="mb-5">
            <h2 className="text-lg text-primary">{title}</h2>
            <p className="text-gray-700">{subtitle}</p>
        </div>
    )
}