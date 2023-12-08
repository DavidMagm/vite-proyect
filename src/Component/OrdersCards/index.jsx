import {ChevronRightIcon} from '@heroicons/react/24/solid';

function OrdersCards({totalPrice, totalProducts}) {

    return (
        <div className="flex justify-content items-center border-black rounded-lg mb-3 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-ligth">01.00.44</span>
                    <span className="font-ligth">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="text-black cursor-pointer"/>
                </p>
            </div>
        </div>
    )
}

export {OrdersCards};