import { GitItem } from './GitItem';
import { useFetchGif } from '../hooks/ useFetchGif';
import PropTypes from 'prop-types';



export const GifGrid = ({ category }) => {

const {images, isLoading} = useFetchGif(category);
console.log({isLoading});





    return (
        <>
            <h1>{category}</h1>
            {
                isLoading &&
                <h2>Cargando</h2>
            }
            {images.map((image) => (
            <GitItem className="card-" 
            key={image.id}
            {...image}
            />
            ))
}

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
