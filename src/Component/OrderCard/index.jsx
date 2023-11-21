import {XMarkIcon} from '@heroicons/react/24/solid';
function OrderCard({title, image, price}) {
    return (
        <div className="flex justify-content items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full object-cover" src={image} alt={title} />
                </figure>
                <p className="text-sm font-ligth overflow-hidden">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon className="w-6 h-6 cursor-pointer"></XMarkIcon>
            </div>
        </div>
    )
}

export {OrderCard};