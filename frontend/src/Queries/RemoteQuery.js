/**
 * A cancelable request to a server.
 *
 * Example:
 *      const query = RemoteQuery.get('/users')
 *          .whenDataArrives( (response) => {
 *              // ... do something with response.data
 *          })
 *
 *  The query can be canceled with:
 *
 *      query.abort()
 */
class RemoteQuery
{
    static post(url, data) {
        return new RemoteQuery(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    static get(url, init) {
        return new RemoteQuery(url, init)
    }

    constructor(url, init = {}) {
        this.controller = new AbortController()

        init.signal = this.controller.signal

        this.request = fetch(url, init)
    }

    whenDataArrives(callback) {
        this.request
            .then((response) => {
                return response.json()
            })
            .then( (response) => {
                callback(response)
            }).catch( (response) => {
                console.log(response)
            })

        return this
    }

    abort() {
        this.controller.abort()
    }
}

export default RemoteQuery