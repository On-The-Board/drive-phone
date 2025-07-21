import * as React from "react"
import Image from "next/image";
import { Clock, Phone, Mail } from "lucide-react";
import logo from "@/app/favicon.ico"

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center text-blue-600">
        {/* Logo/Header */}
        <div className="mb-8">
          <div className="mb-6">
            <Image src={logo} alt="Drive Phone Logo" width={80} height={80} className="mx-auto" />
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Maintenance Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-6">
            <Clock className="w-16 h-16 text-blue-600" />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Site en maintenance
          </h2>
          <p className="text-lg md:text-xl text-blue-700 mb-6">
            Nous travaillons actuellement sur l'amélioration de notre site web pour vous offrir une meilleure expérience.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-700 mb-8">
            <Clock className="w-5 h-5" />
            <span>Retour prévu très bientôt</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">Besoin d'une réparation urgente ?</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="text-lg">07 61 70 75 24</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              <span className="text-lg">contact@drive-phone.fr</span>
            </div>
          </div>
        </div>

        {/* Services Reminder */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Nos services</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold mb-2">Réparation iPhone</h5>
              <p className="text-blue-700">Écrans, batteries, connecteurs</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold mb-2">Réparation Samsung</h5>
              <p className="text-blue-700">Tous modèles, pièces d'origine</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold mb-2">Service à domicile</h5>
              <p className="text-blue-700">Lyon et alentours, 7j/7</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-blue-600 text-sm">
          <p>© 2024 Drive Phone - Réparation de smartphones à Lyon</p>
          <p className="mt-2">Service de réparation mobile professionnel</p>
        </div>
      </div>
    </main>
  );
}
