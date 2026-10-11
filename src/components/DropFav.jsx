import Favorite from './favorite'

function Dropfav({favoriteItems}) {
    
    return (
        <div className="fav-drop">
            <h2>your favorite items</h2>

            {favoriteItems.length > 0 ? (
                favoriteItems.map((item, index) => (
                    <Favorite
                        key={item.id ?? index}
                        item={item}
                    />
                ))
            ) : (
                <p className="empty-fav">
                    Your fav is empty
                </p>
            )}
        </div>
    )
}
export default Dropfav;