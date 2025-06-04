import { Mail } from 'lucide-react';
import React from 'react'

export default function EmailVerification() {
    const handleOpenEmailApp = () => {
        const emailClientUrls = [
            'https://mail.google.com/mail/u/0/#inbox',
            'https://outlook.live.com/mail/0/inbox',
            'mailto:'
        ];
    
        for (const url of emailClientUrls) {
            window.open(url, '_blank');
            break; // only open one
        }
    
    


        // Try to open email clients in sequence
       
    };
    
    return (
        <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="mb-5">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-white" />
                </div>
            </div>

            <h1 className="text-xl font-semibold text-gray-900 mb-2">
                Verify Your Email
            </h1>

            <p className="text-sm font-medium text-gray-700 mb-3">
                j•••@example.com
            </p>

            <p className="text-gray-600 mb-5 text-sm">
                Please check your inbox for a verification link to complete your registration.
            </p>

            <button
                onClick={handleOpenEmailApp}
                className="w-full bg-red-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Open Email App
            </button>

            <button
                className="text-gray-600 hover:text-gray-900 text-sm font-medium mb-4 transition-colors"
            >
                Resend verification email
            </button>

            <p className="text-gray-500 text-xs">
                Please check your spam folder if you haven't received the email
            </p>
        </div>
    )
}
