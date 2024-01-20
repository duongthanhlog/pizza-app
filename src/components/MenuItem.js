function MenuItem() {
    return (  
        <li className="bg-gray-300 p-4 rounded-lg text-center">
        <img className="max-h-24 mx-auto block" src="/pizza.png"alt="pizza" />
        <h4 className="my-3">Peperonei pizza</h4>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button className="rounded-full bg-primary py-2 px-7 min-w-32 text-white mt-3">Add to cart $20</button>
    </li>
    );
}

export default MenuItem;