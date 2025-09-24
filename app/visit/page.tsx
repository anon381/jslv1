"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import Nav from "@/components/nav"

export default function VisitPage() {
  // Nav handles active page and-scroll logic

  
  return (
  <div className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-800 dark:to-blue-900 dark:text-white font-inter">
      <Nav activePage="visit" />
      <section id="visit" className="py-20 sm:py-32 bg-white dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-800 dark:to-blue-900">
        <div className="container mx-auto px-4 pt-16 sm:pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2 sm:mb-4 font-figtree">Plan Your Visit</h2>
              <p className="text-base sm:text-lg text-black/80 dark:text-blue-100">
                We'd love to meet you! Whether you're new to faith, just visiting, or looking for a church home — you're
                welcome here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 bg-blue-100 border-blue-300 text-black dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-white backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 font-figtree">Service Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Sunday Morning</p>
                      <p className="text-black dark:text-blue-200">10:00 AM - 01:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Monday Evening</p>
                      <p className="text-black dark:text-blue-200">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Tuesday Morning</p>
                      <p className="text-black dark:text-blue-200">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Thuresday Evening</p>
                      <p className="text-black dark:text-blue-200">05:00 PM - 08:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-black dark:text-blue-200">
                        Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-blue-100 border-blue-300 text-black dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-white backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 font-figtree">What to Expect</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Come as you are - casual dress is perfectly fine
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Free parking available on-site
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Children's programs during service
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Friendly greeters to help you feel at home
                  </li>
                </ul>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open("/connect", "_self")}>Let Us Know You're Coming</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
