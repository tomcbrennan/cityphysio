import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Apply animations to elements
 */
export default function initAnimateOnScroll() {
	const elementsUp = document.querySelectorAll('[data-animate-up]')
	const elementsLeft = document.querySelectorAll('[data-animate-left]')
	const elementsStagger = gsap.utils.toArray('[data-animate-stagger] > *')

	elementsUp.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=15%',
				duration: 300,
			},
			y: 16,
			opacity: 0,
		}
		gsap.from(element, settings)
	})

	elementsLeft.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=15%',
				duration: 300,
			},
			x: 16,
			opacity: 0,
		}
		gsap.from(element, settings)
	})

	document.querySelectorAll('[data-animate-stagger]').forEach((stagger) => {
		gsap.from(elementsStagger, {
			scrollTrigger: {
				trigger: stagger,
				start: 'top bottom-=15%',
			},
			x: 20,
			opacity: 0,
			delay: 0.2,
			stagger: 0.1,
		})
	})
}
