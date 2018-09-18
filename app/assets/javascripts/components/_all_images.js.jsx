const AllImages = (props) => {
    let images = props.images.map((image) => {
        return(
            <div key={image.id}>
                <Image image={image} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
            </div>
        )
    })
    return(
        <div>
            {images}
        </div>
    )
}