import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

interface ProductCartItemProps {
  item: {
    id: string;
    name: string;
    brand: string;
    size: number;
    price: number;
    quantity: number;
    stock: number;
    image: string;
  };
  onUpdateQuantity: (id: string, size: number, newQuantity: number) => void;
  onRemoveItem: (id: string, size: number) => void;
}

const ProductCartItem = ({ item, onUpdateQuantity, onRemoveItem }: ProductCartItemProps) => {
  const anim = useScrollFadeIn();
  return (
    <div
      ref={anim.ref}
      className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-[#FAFAFA] rounded-lg hover:shadow-md border border-transparent hover:border-[#D4AF37]/30 relative transition-all duration-700 ${anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg bg-[#F9F9F9] mx-auto sm:mx-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 whitespace-normal break-words text-center sm:text-left sm:truncate sm:max-w-none">
          {item.name}
        </h3>
        <p className="text-[#BDC3C7] text-sm whitespace-normal break-words text-center sm:text-left sm:truncate sm:max-w-none">
          {item.brand} • {item.size} ml
        </p>
        <p className="text-[#D4AF37] font-semibold text-center sm:text-left">$ {item.price} MXN</p>
      </div>
      <div className="flex items-center space-x-3 mt-2 sm:mt-0">
        <button
          aria-label="Disminuir cantidad"
          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
          className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          disabled={item.quantity <= 1}
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          aria-label="Aumentar cantidad"
          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
          disabled={item.quantity >= item.stock}
          className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end mt-2 sm:mt-0 min-w-[80px]">
        <p className="font-semibold text-gray-900 text-right whitespace-nowrap">$ {(item.price * item.quantity).toFixed(0)} MXN</p>
        <button
          aria-label="Eliminar producto"
          onClick={() => onRemoveItem(item.id, item.size)}
          className="text-red-500 hover:text-white hover:bg-red-500 transition-colors mt-1 ml-2 sm:ml-0 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCartItem;