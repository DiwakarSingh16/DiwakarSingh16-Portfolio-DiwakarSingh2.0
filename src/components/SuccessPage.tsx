import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface SuccessPageProps {
  onBack: () => void;
}

const SuccessPage = ({ onBack }: SuccessPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle size={80} className="text-green-500 mx-auto" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-blue-600 mb-8">The form was submitted successfully.</p>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Back to Previous Page
        </button>

        {/* Powered by */}
        <div className="mt-16 text-gray-500 text-sm">
          Powered by <strong>getform</strong>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;