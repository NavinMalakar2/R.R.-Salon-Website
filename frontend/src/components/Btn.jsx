import { useNavigate } from "react-router-dom";

const Btn = ()=>{
    const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/contact'); // Redirect to the Contact page
  };
    return(
        <button
        onClick={handleBookNow}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200 mt-4"
      >
        Book Now
      </button>
    )
};
export default Btn;