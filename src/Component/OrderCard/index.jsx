import {XMarkIcon} from '@heroicons/react/24/solid';
function OrderCard({id, title, image, price, handleDelete}) {
    let renderXMarkIcon

    if(handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="w-6 h-6 cursor-pointer"></XMarkIcon>;
    }

    return (
        <div className="flex justify-content items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 rounded">
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
                </figure>
            </div>
            <p className="text-sm font-ligth truncate ml-3">{title}</p>
            <div className="flex items-center gap-2 ml-3">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export {OrderCard};