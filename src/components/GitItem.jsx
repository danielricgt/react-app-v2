import PropTypes from 'prop-types'

export const GitItem = ({title, url}) => {

   //  console.log(title, url);
  return (
     <div className="card" >

        <img src={url} alt={title} />
        <p>{title}</p>

     </div>
  )
}

GitItem.propTypes = {

   title:PropTypes.string.isRequired,
   url:PropTypes.string.isRequired

}
