import PropTypes from 'prop-types';

const ShopItemFunc = ({item: {brand, title, description, descriptionFull, price, currency}}) => {
    return (
        <div className="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchaseInfo">
                <div className="price">{currency}{price}</div>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })
}

export default ShopItemFunc;