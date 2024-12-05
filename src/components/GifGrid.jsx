import {getGifs} from "../helpers/getGifs.js";
import {useEffect, useState} from "react";
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {

    //otra forma

    /*const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect(() => {
        getImages()
    }, []);*/
    // const [images, setImages] = useState([])
    //
    // useEffect(() => {
    //     getGifs(category).then(
    //         newImages => setImages(newImages)
    //     )
    // }, []);

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            { isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">

                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        { ...image} />
                ))}
                {/* usando distructoring
                images.map((image) => (
                    <GifItem key={image.id} image={image} />
                ))*/}
            </div>
        </>
    )
}