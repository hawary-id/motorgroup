export default function NotFound({title,subtitle}) {
    return (
        <div className="container flex flex-col items-center justify-center px-3 py-10 mx-auto text-center md:px-0">
            <img src="/illustration/product-no-found.png" alt="not found"  className='mb-3 w-36 md:mb-6'/>
            <h3 className="mb-1 text-3xl font-semibold text-gray-500">{title}</h3>
            <p className="text-lg text-gray-500">{subtitle}</p>
            <p className="text-lg text-gray-500">Please try again</p>
        </div> 
    )
}