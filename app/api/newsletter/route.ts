import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { subscribeToNewsletter } from '@/lib/email'

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = newsletterSchema.parse(body)
    
    // Subscribe to newsletter
    await subscribeToNewsletter(validatedData.email)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
} 