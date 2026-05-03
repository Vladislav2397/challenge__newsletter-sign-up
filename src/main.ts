import './reset.css'
import './style.scss'

const container = document.querySelector<HTMLDivElement>('#container')!
const form = document.querySelector<HTMLFormElement>('#form')!

form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(form)

    const email = formData.get('email') as string

    container.setAttribute('data-state', 'success')

    const successEmailEl =
        document.querySelector<HTMLSpanElement>('#success-email')!

    successEmailEl.textContent = email
})

const dismissButton = document.querySelector<HTMLButtonElement>('#dismiss')!
dismissButton.addEventListener('click', () => {
    container.removeAttribute('data-state')
})
