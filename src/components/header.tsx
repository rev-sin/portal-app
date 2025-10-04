export default function Header() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-xl px-10 py-4 flex justify-between items-center max-w-4xl w-full">
        <ul className="flex space-x-8">
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Offering</li>
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Contact Us</li>
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Customer</li>
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Downloads</li>
        </ul>
        <ul className="flex space-x-6">
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Sign-Up</li>
          <li className="text-white font-bold hover:text-yellow-400 cursor-pointer">Login</li>
        </ul>

      </div>
    </div>
  );
}
