'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export default function ForgotPasswordPage() {
  const openExternal = (url: string) => {
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  return (
    <div className="mobile-container bg-white min-h-screen flex flex-col px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/login" className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">Forgot Password</h1>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="relative w-[80px] h-[80px] flex items-center justify-center">
          <Image
            src={getAssetPath('/urban-auto-logo.jpg')}
            alt="Urban Auto"
            width={80}
            height={80}
            className="rounded-xl shadow-md object-cover"
            priority
            unoptimized
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-4">
          URBAN <span className="text-primary">AUTO</span>
        </h2>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Support</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          To reset your password, please contact our support team via email or WhatsApp. We will help you get back into your account.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => openExternal('mailto:theurbanauto@gmail.com?subject=Password Reset Request')}
          className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Email Us - theurbanauto@gmail.com
        </button>

        <button
          onClick={() => openExternal('https://wa.me/918889822220?text=Hi%2C%20I%20need%20help%20resetting%20my%20password%20for%20Urban%20Auto.')}
          className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp - +91 88898 22220
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Remember your password?{' '}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
