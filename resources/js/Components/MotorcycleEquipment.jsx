export default function MotorcycleEquipment({title,subtitle}) {
    return (
        <flex className="flex items-center">
            <div className="w-1/2 md:w-1/3">
                <h3 className="font-medium text-gray-700">{title}</h3>
            </div>
            <div className="w-1/2 text-gray-600 md:w-2/3">: {subtitle}</div>
        </flex>
    )
}