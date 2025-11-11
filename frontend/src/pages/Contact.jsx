import AppointmentForm from "../components/AppointmentForm";
import FeedbackForm from "../components/FeedbackForm ";
import ProtectedRoute from "../components/ProtectedRoute";
// ContactInfo Component
const ContactInfo = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
      <p className="mb-2"><strong>Address:</strong> Scheme 78, Near by Vrindavan Restaurant, VijayNagar, Indore</p>
      <p className="mb-2"><strong>Opening Hours:</strong> Mon-Sat: 9 AM - 7 PM</p>
      <p><strong>Contact:</strong> +1 234 567 890</p>
    </div>
  );
};


// Main ContactPage Component
const ContactPage = () => {
  return (
    <>
    <ProtectedRoute>
    <div className="min-h-screen bg-yellow-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactInfo />
        <AppointmentForm />
        <FeedbackForm />
      </div>
    </div>
    </ProtectedRoute>
    </>
  );
};

export default ContactPage;

                                      // @NavinMalakarCreation