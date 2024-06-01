export default function Banner({data}) {
    return (
        data.images.map((image, i) => (
            <img 
                src={image.type === 'large' ? image.large_image : image.small_image} 
                alt={data.name} 
                className={`container w-full px-3 mx-auto mb-3 md:px-0 md:mb-5 ${image.type === 'large' ? 'hidden md:block' : 'block md:hidden'}`} 
                key={i + 1} 
            />
        ))
    )
}