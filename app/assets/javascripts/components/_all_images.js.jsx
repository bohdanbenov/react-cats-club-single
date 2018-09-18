const AllImages = (props) => {
    let images = props.images.map((image) => {
        return(
            <div key={image.id}>
                <Image image={image}/>
            </div>
        )
    })
    return(
        <div>
            {images}
        </div>
    )
}