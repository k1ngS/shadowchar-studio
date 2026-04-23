'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Deliverables from '@/components/Deliverables'
import Comparison from '@/components/Comparison'
import EarlyAccess from '@/components/EarlyAccess'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WaitlistModal from '@/components/WaitlistModal'
import PaymentModal from '@/components/PaymentModal'

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)

  return (
    <>
      <Nav onOpenWaitlist={() => setWaitlistOpen(true)} />
      <main id="main-content">
        <Hero
          onOpenWaitlist={() => setWaitlistOpen(true)}
          onOpenPayment={() => setPaymentOpen(true)}
        />
        <HowItWorks />
        <Deliverables />
        <Comparison />
        <EarlyAccess
          onOpenWaitlist={() => setWaitlistOpen(true)}
          onOpenPayment={() => setPaymentOpen(true)}
        />
        <FAQ />
        <FinalCTA
          onOpenWaitlist={() => setWaitlistOpen(true)}
          onOpenPayment={() => setPaymentOpen(true)}
        />
        <Footer />
      </main>

      {waitlistOpen && (
        <WaitlistModal onClose={() => setWaitlistOpen(false)} />
      )}
      {paymentOpen && (
        <PaymentModal onClose={() => setPaymentOpen(false)} />
      )}
    </>
  )
}
