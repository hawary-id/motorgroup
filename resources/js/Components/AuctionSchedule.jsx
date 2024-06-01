export default function AuctionSchedule({day,auctions}) {
    return (
        <div className="">
            <h2 className="text-lg font-semibold text-primary">{day}</h2>
            {auctions.map((item,i) => (
                <div className="text-gray-700" key={i+1}>{item.name}</div>
            ))}
        </div>

    )
}