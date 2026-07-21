/**
 * Curated client testimonials (originally from Google reviews).
 *
 * To add a review: copy a block, paste your new one, done. Order here is the
 * order they appear on the home page. Keep the best / most specific ones first.
 */
export interface Testimonial {
  name: string
  body: string
  /** Where it came from, shown as a small attribution. */
  source?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Kamelia Emamian',
    source: 'Google review',
    body:
      'Thank you Uzziel for helping us navigate different EMRs to find one best ' +
      'suited for our services and then help establish that EMR. I have a super ' +
      'busy schedule and I appreciate you being on top of everything and ' +
      'following up. Your attention and care is much appreciated.',
  },
  {
    name: 'Marcel Severe',
    source: 'Google review',
    body:
      'TECHE Health Services in one word "AMAZING". Great services. Adjusts to ' +
      'client needs. Available to provide technical support. One text away to ' +
      'solve any issue and provide accurate counselling. Great tools to make ' +
      'office work easier.',
  },
]
