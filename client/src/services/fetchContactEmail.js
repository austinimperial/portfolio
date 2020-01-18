export default function FetchContactEmail(email) {
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    return fetch('api/contact_email',{
        method: 'POST',
        headers,
        body: JSON.stringify(email)
    })
}