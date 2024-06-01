export default function CoreValueContent({title,contents}) {
    return (
        <div className="mb-5">
            <ul className="list-disc list-outside">
                <h2 className="text-lg text-primary">{title}</h2>
                {contents.map((item,i) => (
                    <li className="ml-8 text-gray-700">{item.list}</li>
                ))}
            </ul>
        </div>
    )
}