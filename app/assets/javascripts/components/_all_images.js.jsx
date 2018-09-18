const AllImages = (props) => {
    let images = props.images.map((image) => {
        return(
            <div key={image.id}>
                <p>{image.description}</p>
            </div>
        )
    })
    return(
        <div>
            {images}
        </div>
    )
}